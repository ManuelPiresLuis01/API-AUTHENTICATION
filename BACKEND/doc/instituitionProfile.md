# Documentação da Rota de Busca de Perfil de Instituição

Todas as rotas deste documento tem o prefixo: `/profile`

---

## Descrição

A rota `/profile/institutions/:id` é utilizada para buscar o perfil completo de uma instituição específica. Ela retorna informações detalhadas sobre a instituição, como nome, descrição, logo, banner, endereço e outros campos relevantes.

> **Importante**: Esta rota requer autenticação. Apenas usuários autenticados podem acessá-la.

---

## Endpoint

### GET `/profile/institutions/:id`

---

## Funcionalidades

1. **Busca de Perfil de Instituição**:
   - A rota utiliza o ID da instituição fornecido como parâmetro na URL para buscar os dados do perfil no banco de dados.
   - Retorna apenas os campos públicos e relevantes do perfil da instituição.

2. **Validação de Instituição**:
   - Se a instituição não for encontrada no banco de dados, a rota retorna um erro `404 - Not Found`.

3. **Autenticação Necessária**:
   - A rota está protegida pelo middleware `ensureAuthenticated`, garantindo que apenas usuários autenticados possam acessá-la.

---

## Requisição

### Headers
- **Authorization**: Token JWT no formato `Bearer <token>`. O token deve ser válido e gerado após a autenticação do usuário.

### Parâmetros
- **id** (string): O ID único da instituição cujo perfil será buscado.

### Exemplo de URL

##### GET `/profile/institutions/653f8e1b9d7e9c3f0c8d4a2b`


---

## Respostas

### Sucesso (Status Code: 200)
Retorna os dados do perfil da instituição.

```json
{
	"name": "Example University",
	"institutionalEmail": "contact@exampleuniversity.edu",
	"address": "123 Academic Street, Education City, Country",
	"description": "A leading institution dedicated to fostering innovation and academic excellence.",
	"representative": "Dr. Jane Doe",
	"banner": "https://example.com/banner.jpg",
	"logo": "https://example.com/logo.png",
	"phone": "+1234567890",
	"id": "67f2fc9a7d6cbaff5ada6ace"
}
```
### Erros

## 401 - Unauthorized

**Descrição:** Ocorre quando o token de autenticação não é fornecido ou é inválido.

**Mensagens possíveis:**

```json
{
  "message": "Token missing"
}
```

```json
{
  "message": "Invalid token"
}
```

---

## 404 - Not Found

**Mensagem:** "Instituition not found"  
**Descrição:** Ocorre quando a instituição com o ID fornecido não é encontrada no banco de dados.

```json
{
  "message": "Instituition not found"
}
```

---

## 500 - Internal Server Error

**Descrição:** Ocorre quando há um erro inesperado no servidor durante o processamento da requisição.

```json
{
  "message": "Internal server error"
}
```

---

# Documentação da Rota de Busca de Membros de uma Instituição

---

## Descrição

A rota `/profile/institutions/:id/members` é utilizada para listar todos os membros associados a uma instituição específica. Ela retorna informações detalhadas sobre cada membro, como nome, avatar, nível, pontos e papel (role) dentro da instituição.

> **Importante**: Esta rota requer autenticação. Apenas usuários autenticados podem acessá-la.

---

## Endpoint

### GET `/profile/institutions/:id/members`

---

## Funcionalidades

1. **Listagem de Membros**:
   - A rota utiliza o ID da instituição fornecido como parâmetro na URL para buscar os membros associados à instituição no banco de dados.
   - Retorna informações relevantes sobre cada membro, como nome, avatar, nível, pontos e papel (role).

2. **Validação de Instituição**:
   - Se a instituição com o ID fornecido não for encontrada no banco de dados, a rota retorna um erro `404 - Not Found`.

3. **Autenticação Necessária**:
   - A rota está protegida pelo middleware `ensureAuthenticated`, garantindo que apenas usuários autenticados possam acessá-la.

---

## Requisição

### Headers
- **Authorization**: Token JWT no formato `Bearer <token>`. O token deve ser válido e gerado após a autenticação do usuário.

### Parâmetros
- **id** (string): O ID único da instituição cujos membros serão listados.

### Exemplo de URL

#### GET `/profile/institutions/653f8e1b9d7e9c3f0c8d4a2b/members`


---

## Respostas

### Sucesso (Status Code: 200)
Retorna uma lista de membros associados à instituição.

```json
[
	{
		"name": "Malungo",
		"avatar": "https://res.cloudinary.com/dki0zmiib/image/upload/v1744060280/user-avatars/cydzwrlm0a5xphffy5sa.webp",
		"level": 4,
		"points": 8,
		"role": "admin",
		"id": "67f2faf07d6cbaff5ada6ac2"
	}
]
```

### Erros

## 401 - Unauthorized

**Descrição:** Ocorre quando o token de autenticação não é fornecido ou é inválido.

**Mensagens possíveis:**

```json
{
  "message": "Token missing"
}
```

```json
{
  "message": "Invalid token"
}
```

---

## 404 - Not Found

**Mensagem:** "Instituition not found"  
**Descrição:** Ocorre quando a instituição com o ID fornecido não é encontrada no banco de dados.

```json
{
  "message": "Instituition not found"
}
```

---

## 500 - Internal Server Error

**Descrição:** Ocorre quando há um erro inesperado no servidor durante o processamento da requisição.

```json
{
  "message": "Internal server error"
}
```

---

# Documentação das Rotas de Atualização de Dados da Instituição

---

## Descrição

As rotas `/institutions/:id/address`, `/institutions/:id/banner`, `/institutions/:id/description`, `/institutions/:id/email`, `/institutions/:id/logo` e `/institutions/:id/name` são utilizadas para atualizar informações específicas de uma instituição. Cada rota permite a atualização de um campo específico, como endereço, banner, descrição, email, logo ou nome.

> **Importante**: Todas as rotas requerem autenticação. Apenas usuários autenticados podem acessá-las.

---

## Endpoints

### PATCH `/institutions/:id/address`
- **Descrição**: Atualiza o endereço da instituição.
- **Funcionalidade**: Recebe um novo endereço e atualiza o campo `address` da instituição.

### PATCH `/institutions/:id/banner`
- **Descrição**: Atualiza o banner da instituição.
- **Funcionalidade**: Recebe uma nova URL de banner e atualiza o campo `banner` da instituição.

### PATCH `/institutions/:id/description`
- **Descrição**: Atualiza a descrição da instituição.
- **Funcionalidade**: Recebe uma nova descrição e atualiza o campo `description` da instituição.

### PATCH `/institutions/:id/email`
- **Descrição**: Atualiza o email institucional da instituição.
- **Funcionalidade**: Recebe um novo email e atualiza o campo `email` da instituição.

### PATCH `/institutions/:id/logo`
- **Descrição**: Atualiza o logo da instituição.
- **Funcionalidade**: Recebe uma nova URL de logo e atualiza o campo `logo` da instituição.

### PATCH `/institutions/:id/name`
- **Descrição**: Atualiza o nome da instituição.
- **Funcionalidade**: Recebe um novo nome e atualiza o campo `name` da instituição.

---

## Funcionalidades Comuns

1. **Validação de Instituição**:
   - O ID da instituição é fornecido como parâmetro na URL.
   - Se a instituição não for encontrada no banco de dados, a rota retorna um erro `404 - Not Found`.

2. **Autenticação Necessária**:
   - As rotas estão protegidas pelo middleware `ensureAuthenticated`, garantindo que apenas usuários autenticados possam acessá-las.

---

## Requisição

### Headers
- **Authorization**: Token JWT no formato `Bearer <token>`. O token deve ser válido e gerado após a autenticação do usuário.

### Body
- Para `/institutions/:id/address`:
  ```json
  {
    "address": "Rua Exemplo, 123"
  }
  ```

  ### Para `/institutions/:id/banner`:
```json
{
  "banner": "https://example.com/new-banner.jpg"
}
```

### Para `/institutions/:id/description`:
```json
{
  "description": "Nova descrição da instituição"
}
```

### Para `/institutions/:id/email`:
```json
{
  "email": "new.email@example.com"
}
```

### Para `/institutions/:id/logo`:
```json
{
  "logo": "https://example.com/new-logo.png"
}
```

### Para `/institutions/:id/name`:
```json
{
  "name": "Novo Nome da Instituição"
}
```

---

## Respostas (Sucesso - Status Code: 200)

### Para `/institutions/:id/address`:
```json
{
  "message": "Address updated successfully"
}
```

### Para `/institutions/:id/banner`:
```json
{
  "message": "Banner updated successfully"
}
```

### Para `/institutions/:id/description`:
```json
{
  "message": "Description updated successfully"
}
```

### Para `/institutions/:id/email`:
```json
{
  "message": "Instituitional E-mail updated successfully"
}
```

### Para `/institutions/:id/logo`:
```json
{
  "message": "Logo updated successfully"
}
```

### Para `/institutions/:id/name`:
```json
{
  "message": "Name updated successfully"
}
```

---

## Erros

### 401 - Unauthorized

**Descrição:** Ocorre quando o token de autenticação não é fornecido ou é inválido.

**Mensagens possíveis:**

```json
{
  "message": "Token missing"
}
```

```json
{
  "message": "Invalid token"
}
```

---

### 404 - Not Found

**Mensagem:** "Instituition not found"  
**Descrição:** Ocorre quando a instituição com o ID fornecido não é encontrada no banco de dados.

```json
{
  "message": "Instituition not found"
}
```

---

### 500 - Internal Server Error

**Descrição:** Ocorre quando há um erro inesperado no servidor durante o processamento da requisição.

```json
{
  "message": "Internal server error"
}
```

---

# Documentação da Rota de Atualização do Telefone da Instituição

---

## Descrição

A rota `/institutions/:id/phone` é utilizada para atualizar o número de telefone de uma instituição específica. Ela permite que o usuário autenticado altere o campo `phone` associado à instituição.

> **Importante**: Esta rota requer autenticação. Apenas usuários autenticados podem acessá-la.

---

## Endpoint

### PATCH `/institutions/:id/phone`

---

## Funcionalidades

1. **Atualização do Telefone**:
   - A rota utiliza o ID da instituição fornecido como parâmetro na URL para localizar e atualizar o número de telefone no banco de dados.
   - Se a instituição não for encontrada, a rota retorna um erro `404 - Not Found`.

2. **Autenticação Necessária**:
   - A rota está protegida pelo middleware `ensureAuthenticated`, garantindo que apenas usuários autenticados possam acessá-la.

---

## Requisição

### Headers
- **Authorization**: Token JWT no formato `Bearer <token>`. O token deve ser válido e gerado após a autenticação do usuário.

### Parâmetros
- **id** (string): O ID único da instituição cujo telefone será atualizado.

### Body
- **phone** (string): O novo número de telefone da instituição.

### Exemplo de Requisição
```json
{
  "phone": "+1234567890"
}
```
## Respostas

### Sucesso (Status Code: 200)

**Descrição:** Retorna uma mensagem indicando que o telefone foi atualizado com sucesso.

```json
{
  "message": "Phone updated successfully"
}
```

---

## Erros

### 401 - Unauthorized

**Descrição:** Ocorre quando o token de autenticação não é fornecido ou é inválido.

**Mensagens possíveis:**

```json
{
  "message": "Token missing"
}
```

```json
{
  "message": "Invalid token"
}
```

---

### 404 - Not Found

**Mensagem:** "Instituition not found"  
**Descrição:** Ocorre quando a instituição com o ID fornecido não é encontrada no banco de dados.

```json
{
  "message": "Instituition not found"
}
```

---

### 500 - Internal Server Error

**Descrição:** Ocorre quando há um erro inesperado no servidor durante o processamento da requisição.

```json
{
  "message": "Internal server error"
}
```

---

# Documentação da Rota de Atualização Completa de Dados da Instituição

---

## Descrição

A rota `/institutions/:id` (método `PATCH`) é utilizada para atualizar todos os campos de uma instituição específica. Ela permite que o usuário autenticado altere simultaneamente múltiplos campos, como nome, email institucional, endereço, descrição, representante, banner, logo e telefone.

> **Importante**: Esta rota requer autenticação. Apenas usuários autenticados podem acessá-la.

---

## Endpoint

### PATCH `/institutions/:id`

---

## Funcionalidades

1. **Atualização Completa de Dados**:
   - A rota utiliza o ID da instituição fornecido como parâmetro na URL para localizar e atualizar os campos no banco de dados.
   - Todos os campos fornecidos no corpo da requisição serão atualizados. Se a instituição não for encontrada, a rota retorna um erro `404 - Not Found`.

2. **Autenticação Necessária**:
   - A rota está protegida pelo middleware `ensureAuthenticated`, garantindo que apenas usuários autenticados possam acessá-la.

---

## Requisição

### Headers
- **Authorization**: Token JWT no formato `Bearer <token>`. O token deve ser válido e gerado após a autenticação do usuário.

### Parâmetros
- **id** (string): O ID único da instituição cujos dados serão atualizados.

### Body
- **name** (string, opcional): Novo nome da instituição.
- **institutionalEmail** (string, opcional): Novo email institucional.
- **address** (string, opcional): Novo endereço.
- **description** (string, opcional): Nova descrição.
- **banner** (string, opcional): Nova URL do banner.
- **logo** (string, opcional): Nova URL do logo.
- **phone** (string, opcional): Novo número de telefone.

### Exemplo de Requisição
```json
{
    "name": "Example University",
    "institutionalEmail": "exemplecontact@exampleuniversity.edu",
    "address": "123 Academic Street, Education City, Country",
    "description": "A leading institution dedicated to fostering innovation and academic excellence.",
    "banner": "https://example.com/banner.jpg",
    "logo": "https://example.com/logo.png",
    "phone": "+1234567892"
}
```

## Respostas

### Sucesso (Status Code: 200)

**Descrição:** Retorna uma mensagem indicando que os dados da instituição foram atualizados com sucesso.

```json
{
  "message": "Instituition updated successfully"
}
```

---

## Erros

### 401 - Unauthorized

**Descrição:** Ocorre quando o token de autenticação não é fornecido ou é inválido.

**Mensagens possíveis:**

```json
{
  "message": "Token missing"
}
```

```json
{
  "message": "Invalid token"
}
```

---

### 404 - Not Found

**Mensagem:** "Instituition not found"  
**Descrição:** Ocorre quando a instituição com o ID fornecido não é encontrada no banco de dados.

```json
{
  "message": "Instituition not found"
}
```

---

### 500 - Internal Server Error

**Descrição:** Ocorre quando há um erro inesperado no servidor durante o processamento da requisição.

```json
{
  "message": "Internal server error"
}
```

# Documentação da Rota de Atualização do Papel (Role) de um Membro em uma Instituição

---

## Descrição

A rota `/institutions/:instId/members/:userId/role` é utilizada para atualizar o papel (role) de um membro específico em uma instituição. Ela permite que o administrador ou responsável pela instituição altere o papel de um usuário associado à instituição.

> **Importante**: Esta rota requer autenticação. Apenas usuários autenticados podem acessá-la.

---

## Endpoint

### PATCH `/institutions/:instId/members/:userId/role`

---

## Funcionalidades

1. **Atualização do Papel (Role)**:
   - A rota utiliza o `userId` e o `instId` fornecidos como parâmetros na URL para localizar a associação do membro com a instituição.
   - O novo papel (role) é fornecido no corpo da requisição e atualizado no banco de dados.
   - Se o membro não for encontrado, a rota retorna um erro `404 - Not Found`.
   - Se o membro já possuir o papel especificado, a rota retorna um erro `400 - Bad Request`.

2. **Autenticação Necessária**:
   - A rota está protegida pelo middleware `ensureAuthenticated`, garantindo que apenas usuários autenticados possam acessá-la.

---

## Requisição

### Headers
- **Authorization**: Token JWT no formato `Bearer <token>`. O token deve ser válido e gerado após a autenticação do usuário.

### Parâmetros
- **instId** (string): O ID único da instituição.
- **userId** (string): O ID único do membro cujo papel será atualizado.

### Body
- **newRole** (string): O novo papel (role) que será atribuído ao membro.

### Exemplo de Requisição
```json
{
  "newRole": "admin"
}
```

## Respostas

### Sucesso (Status Code: 200)

**Descrição:** Retorna uma mensagem indicando que o papel do membro foi atualizado com sucesso.

```json
{
  "message": "Member role updated successfully"
}
```

---

## Erros

### 400 - Bad Request

**Mensagem:** "Member already has this role"  
**Descrição:** Ocorre quando o membro já possui o papel especificado.

```json
{
  "message": "Member already has this role"
}
```

---

### 401 - Unauthorized

**Descrição:** Ocorre quando o token de autenticação não é fornecido ou é inválido.

**Mensagens possíveis:**

```json
{
  "message": "Token missing"
}
```

```json
{
  "message": "Invalid token"
}
```

---

### 404 - Not Found

**Mensagem:** "Member not found"  
**Descrição:** Ocorre quando o membro com o `userId` e `instId` fornecidos não é encontrado no banco de dados.

```json
{
  "message": "Member not found"
}
```

---

### 500 - Internal Server Error

**Descrição:** Ocorre quando há um erro inesperado no servidor durante o processamento da requisição.

```json
{
  "message": "Internal server error"
}
```

---

# Documentação da Rota de Remoção de Membro de uma Instituição

---

## Descrição

A rota `/institutions/members/:userId/:instId` é utilizada para remover um membro específico de uma instituição. Ela permite que o administrador ou responsável pela instituição exclua a associação de um usuário com a instituição.

> **Importante**: Esta rota requer autenticação. Apenas usuários autenticados podem acessá-la.

---

## Endpoint

### DELETE `/institutions/members/:userId/:instId`

---

## Funcionalidades

1. **Remoção de Membro**:
   - A rota utiliza o `userId` e o `instId` fornecidos como parâmetros na URL para localizar a associação do membro com a instituição.
   - Se o membro não for encontrado, a rota retorna um erro `404 - Not Found`.
   - Após a remoção, a associação entre o usuário e a instituição é permanentemente excluída do banco de dados.

2. **Autenticação Necessária**:
   - A rota está protegida pelo middleware `ensureAuthenticated`, garantindo que apenas usuários autenticados possam acessá-la.

---

## Requisição

### Headers
- **Authorization**: Token JWT no formato `Bearer <token>`. O token deve ser válido e gerado após a autenticação do usuário.

### Parâmetros
- **instId** (string): O ID único da instituição.
- **userId** (string): O ID único do membro que será removido.

### Exemplo de URL

#### DELETE `/institutions/members/653f8e1b9d7e9c3f0c8d4a2b/653f8e1b9d7e9c3f0c8d4a2c` 


---

## Respostas

### Sucesso (Status Code: 204)
Retorna uma resposta sem conteúdo, indicando que o membro foi removido com sucesso.

```json
{}
```

## Erros

## 401 - Unauthorized

**Descrição:** Ocorre quando o token de autenticação não é fornecido ou é inválido.

**Mensagens possíveis:**

```json
{
  "message": "Token missing"
}
```

```json
{
  "message": "Invalid token"
}
```

---

## 404 - Not Found

**Mensagem:** "Member not found"  
**Descrição:** Ocorre quando o membro com o `userId` e `instId` fornecidos não é encontrado no banco de dados.

```json
{
  "message": "Member not found"
}
```

---

## 500 - Internal Server Error

**Descrição:** Ocorre quando há um erro inesperado no servidor durante o processamento da requisição.

```json
{
  "message": "Internal server error"
}
```

# Documentação da Rota de Exclusão de Perfil de Instituição

---

## Descrição

A rota **`DELETE /instituitions/:id`** é utilizada para excluir permanentemente o perfil de uma instituição específica. Apenas usuários autenticados podem acessar esta rota.

---

## Endpoint

### DELETE `/instituitions/:id`

---

## Funcionalidades

1. **Exclusão de Instituição**:
   - O ID da instituição é fornecido como parâmetro na URL.
   - Valida se a instituição existe antes da exclusão.
   - Remove permanentemente a instituição do banco de dados.

2. **Autenticação Necessária**:
   - A rota está protegida pelo middleware `ensureAuthenticated`.

---

## Requisição

### Headers
- **Authorization**: Token JWT no formato `Bearer <token>`.

### Parâmetros
- **id** (string): ID da instituição a ser excluída.

### Exemplo de URL

#### DELETE `/instituitions/653f8e1b9d7e9c3f0c8d4a2b`


---

## Respostas

### Sucesso (Status Code: 204)
Retorna uma resposta sem conteúdo, indicando que o membro foi removido com sucesso.
```json
{}
```

### Erros

## 401 - Unauthorized

**Mensagem:** "Token missing" ou "Invalid token"

```json
{
  "message": "Token missing"
}
```

---

## 404 - Not Found

**Mensagem:** "Instituition not found"

```json
{
  "message": "Instituition not found"
}
```

---

## 500 - Internal Server Error

**Mensagem:** "Internal server error"

```json
{
  "message": "Internal server error"
}
```




Endpoint
GET /profile/users/:id/public
