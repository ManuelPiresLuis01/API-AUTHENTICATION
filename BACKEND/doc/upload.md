# Documentação da Rota de Upload

## Descrição
A rota de upload é responsável por receber arquivos enviados pelo cliente, processá-los e armazená-los no Cloudinary. A rota suporta diferentes tipos de recursos (por exemplo, imagens) e permite a organização dos arquivos em pastas específicas no Cloudinary. Após o upload bem-sucedido, a URL segura do arquivo é retornada ao cliente.

---

## Endpoint

### POST `/upload`

---

## Funcionalidades

1. **Upload de Arquivos**: Permite o upload de arquivos com suporte a transformações específicas para imagens e vídeos.
2. **Organização por Pastas**: Os arquivos são organizados em pastas específicas no Cloudinary, como `userAvatars`, `userCovers`, `instBanners` ou `instLogos`.
3. **Transformações Automáticas**:
   - Para imagens: Redimensionamento e ajuste de qualidade automática.
   - Para vídeos: Ajuste de qualidade automática e redimensionamento limitado.
4. **Autenticação**: A rota está protegida pelo middleware `ensureAuthenticated`, garantindo que apenas usuários autenticados possam acessá-la.

---

## Requisição

### Headers
- **Authorization**: Token JWT no formato `Bearer <token>`. O token deve ser válido e gerado após a autenticação do usuário.

### Body (FormData)
- **file**: Arquivo a ser enviado. Deve ser enviado como um campo de formulário com o nome `file`.

### Query Parameters
| Parâmetro    | Tipo                                      | Descrição                                                                 |
|--------------|-------------------------------------------|-----------------------------------------------------------------------------|
| resourceType | `"image"`                                 | Define o tipo de recurso a ser enviado. Atualmente, apenas `"image"` é suportado. |
| folderName   | `"userAvatars" \| "userCovers" \| "instBanners" \| "instLogos"` | Define a pasta no Cloudinary onde o arquivo será armazenado.               |
| formatType   | `"webp" \| "mp4"`                         | Define o formato final do arquivo após o upload.                           |

---

## Respostas

### Sucesso (Status Code: 200)
Retorna a URL segura do arquivo armazenado no Cloudinary.

```json
{
  "url": "https://res.cloudinary.com/<cloud_name>/<resource_type>/upload/<transformation_options>/<folder_name>/<file_name>"
}
```
### Erros

### 400 - Bad Request

- **Mensagem**: `"File not found"`
- **Descrição**: Ocorre quando nenhum arquivo é enviado no corpo da requisição.
- **Exemplo de Resposta**:
```json
{
  "message": "File not found"
}
```

---

### 401 - Unauthorized

- **Mensagens**: `"Token missing"` ou `"Invalid token"`
- **Descrição**: Ocorre quando o token de autenticação não é fornecido ou é inválido.
- **Exemplo de Resposta**:

**Token ausente**:
```json
{
  "message": "Token missing"
}
```

**Token inválido**:
```json
{
  "message": "Invalid token"
}
```

---

### 500 - Internal Server Error

- **Mensagem**: `"Internal server error"`
- **Descrição**: Ocorre quando há um erro inesperado no servidor durante o processamento da requisição.
- **Exemplo de Resposta**:
```json
{
  "message": "Internal server error"
}
```