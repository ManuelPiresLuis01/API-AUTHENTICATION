# Documentação da Rota `/profile/me`

Todas as rotas deste documento tem o prefixo: `/profile`

---

## Descrição

A rota `/profile/me` é utilizada para buscar o perfil completo do usuário autenticado. Ela retorna informações detalhadas sobre o usuário, como nome, email, avatar, foto de capa, data de nascimento, gênero, nível, pontos e outros campos relevantes.

---

## Endpoint

### GET `/profile/me`

---

## Funcionalidades

1. **Busca de Perfil do Usuário Autenticado**:
   - A rota utiliza o ID do usuário extraído do token JWT (via middleware de autenticação) para buscar os dados do perfil no banco de dados.
   - Retorna apenas os campos públicos e relevantes do perfil do usuário.

2. **Validação de Usuário**:
   - Se o usuário não for encontrado no banco de dados, a rota retorna um erro `404 - Not Found`.

---

## Requisição

### Headers
- **Authorization**: Token JWT no formato `Bearer <token>`. O token deve ser válido e gerado após a autenticação do usuário.

### Parâmetros
- Nenhum parâmetro é necessário na requisição, pois o ID do usuário é extraído automaticamente do token JWT.

---

## Respostas

### Sucesso (Status Code: 200)
Retorna os dados do perfil do usuário autenticado.

```json
{
  "id": "653f8e1b9d7e9c3f0c8d4a2b",
  "name": "John Doe",
  "email": "johndoe@example.com",
  "phoneNumber": "+1234567890",
  "gender": "masculine",
  "avatar": "https://example.com/avatar.jpg",
  "coverPhoto": "https://example.com/cover.jpg",
  "birthDate": "1990-01-01T00:00:00.000Z",
  "level": 5,
  "points": 1500
}
```

### Erros

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

### 404 - Not Found

- **Mensagem**: `"User not found"`
- **Descrição**: Ocorre quando o usuário autenticado não é encontrado no banco de dados.
- **Exemplo de Resposta**:
```json
{
  "message": "User not found"
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
---

# Documentação da Rota `/profile/users/:id/public`

---

## Descrição

A rota `/profile/users/:id/public` é utilizada para buscar o perfil público de um usuário específico. Ela retorna informações limitadas e públicas sobre o usuário, como nome, avatar, foto de capa, nível e pontos. Essa rota é útil para visualizar perfis de outros usuários sem expor informações sensíveis.

> **Importante**: Essa rota requer autenticação. Apenas usuários autenticados podem acessá-la.

---

## Endpoint

### GET `/profile/users/:id/public`

---

## Funcionalidades

1. **Busca de Perfil Público**:
   - A rota utiliza o ID do usuário fornecido como parâmetro na URL para buscar os dados do perfil no banco de dados.
   - Retorna apenas os campos públicos e relevantes do perfil do usuário.

2. **Validação de Usuário**:
   - Se o usuário não for encontrado no banco de dados, a rota retorna um erro `404 - Not Found`.

3. **Autenticação Necessária**:
   - A rota está protegida pelo middleware `ensureAuthenticated`, garantindo que apenas usuários autenticados possam acessá-la.

---

## Requisição

### Headers
- **Authorization**: Token JWT no formato `Bearer <token>`. O token deve ser válido e gerado após a autenticação do usuário.

### Parâmetros
- **id** (string): O ID único do usuário cujo perfil público será buscado.

### Exemplo de URL

#### GET `/profile/users/653f8e1b9d7e9c3f0c8d4a2b/public`

---

## Respostas

### Sucesso (Status Code: 200)
Retorna os dados públicos do perfil do usuário.

```json
{
  "id": "653f8e1b9d7e9c3f0c8d4a2b",
  "name": "John Doe",
  "avatar": "https://example.com/avatar.jpg",
  "coverPhoto": "https://example.com/cover.jpg",
  "level": 5,
  "points": 1500
}
```
### Erros

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

### 404 - Not Found

- **Mensagem**: `"User not found"`
- **Descrição**: Ocorre quando o usuário autenticado não é encontrado no banco de dados.
- **Exemplo de Resposta**:
```json
{
  "message": "User not found"
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
---

# Documentação da Rota `/profile/users/:id/institutions`

---

## Descrição

A rota `/profile/users/:id/institutions` é utilizada para listar todas as instituições às quais um usuário específico pertence. Ela retorna informações detalhadas sobre cada instituição, como nome, descrição e logo. Essa rota é útil para visualizar as instituições associadas a um usuário.

> **Importante**: Essa rota requer autenticação. Apenas usuários autenticados podem acessá-la.

---

## Endpoint

### GET `/profile/users/:id/institutions`

---

## Funcionalidades

1. **Listagem de Instituições**:
   - A rota utiliza o ID do usuário fornecido como parâmetro na URL para buscar as instituições associadas ao usuário no banco de dados.
   - Retorna informações relevantes sobre cada instituição, como nome, descrição e logo.

2. **Validação de Usuário**:
   - Se o usuário com o ID fornecido não for encontrado no banco de dados, a rota retorna um erro `404 - Not Found`.

3. **Autenticação Necessária**:
   - A rota está protegida pelo middleware `ensureAuthenticated`, garantindo que apenas usuários autenticados possam acessá-la.

---

## Requisição

### Headers
- **Authorization**: Token JWT no formato `Bearer <token>`. O token deve ser válido e gerado após a autenticação do usuário.

### Parâmetros
- **id** (string): O ID único do usuário cujas instituições serão listadas.

### Exemplo de URL

#### GET `/profile/users/653f8e1b9d7e9c3f0c8d4a2b/institutions`


---

## Respostas

### Sucesso (Status Code: 200)
Retorna uma lista de instituições associadas ao usuário.

```json
[
    {
        "id": "653f8e1b9d7e9c3f0c8d4a2c",
        "name": "Instituição A",
        "description": "Descrição da Instituição A",
        "logo": "https://example.com/logo-a.png"
    },
    {
        "id": "653f8e1b9d7e9c3f0c8d4a2d",
        "name": "Instituição B",
        "description": "Descrição da Instituição B",
        "logo": "https://example.com/logo-b.png"
    }
]
```

### Erros

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

### 404 - Not Found

- **Mensagem**: `"User not found"`
- **Descrição**: Ocorre quando o usuário autenticado não é encontrado no banco de dados.
- **Exemplo de Resposta**:
```json
{
  "message": "User not found"
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
---

# Documentação das Rotas de Atualização de Avatar e Capa

---

## Descrição

As rotas `/profile/users/avatar` e `/profile/users/cover` são utilizadas para atualizar o avatar e a foto de capa de um usuário autenticado, respectivamente. Essas rotas permitem que o usuário envie uma nova URL para substituir a imagem existente.

> **Importante**: Ambas as rotas requerem autenticação. Apenas usuários autenticados podem acessá-las.

---

## Endpoints

### PATCH `/profile/users/avatar`
- **Descrição**: Atualiza o avatar do usuário autenticado.
- **Funcionalidade**: Recebe uma URL de imagem e atualiza o campo `avatar` do perfil do usuário.

### PATCH `/profile/users/cover`
- **Descrição**: Atualiza a foto de capa do usuário autenticado.
- **Funcionalidade**: Recebe uma URL de imagem e atualiza o campo `coverPhoto` do perfil do usuário.

---

## Funcionalidades Comuns

1. **Validação de Usuário**:
   - O ID do usuário é extraído do token JWT (via middleware de autenticação).
   - Se o usuário não for encontrado no banco de dados, a rota retorna um erro `404 - Not Found`.

2. **Autenticação Necessária**:
   - As rotas estão protegidas pelo middleware `ensureAuthenticated`, garantindo que apenas usuários autenticados possam acessá-las.

---

## Requisição

### Headers
- **Authorization**: Token JWT no formato `Bearer <token>`. O token deve ser válido e gerado após a autenticação do usuário.

### Body
- **url** (string): A URL da nova imagem (avatar ou capa) que será associada ao usuário.

### Exemplo de Requisição
```json
{
  "url": "https://example.com/new-avatar.jpg"
}
```

# Respostas da API

## Sucesso (Status Code: 200)

### Para `/profile/users/avatar`:
```json
{
  "message": "Avatar updated successfully"
}
```

### Para `/profile/users/cover`:
```json
{
  "message": "Cover updated successfully"
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

**Descrição:** Ocorre quando o usuário autenticado não é encontrado no banco de dados.

```json
{
  "message": "User not found"
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

# Documentação das Rotas de Atualização de Dados do Usuário

---

## Descrição

As rotas `/profile/users/birth-date`, `/profile/users/email` e `/profile/users/gender` são utilizadas para atualizar informações específicas do perfil do usuário autenticado. Cada rota permite a atualização de um campo específico, como data de nascimento, email ou gênero.

> **Importante**: Todas as rotas requerem autenticação. Apenas usuários autenticados podem acessá-las.

---

## Endpoints

### PATCH `/profile/users/birth-date`
- **Descrição**: Atualiza a data de nascimento do usuário autenticado.
- **Funcionalidade**: Recebe uma nova data de nascimento e atualiza o campo `birthDate` do perfil do usuário.

### PATCH `/profile/users/email`
- **Descrição**: Atualiza o email do usuário autenticado.
- **Funcionalidade**: Recebe um novo email e atualiza o campo `email` do perfil do usuário.

### PATCH `/profile/users/gender`
- **Descrição**: Atualiza o gênero do usuário autenticado.
- **Funcionalidade**: Recebe um novo valor de gênero e atualiza o campo `gender` do perfil do usuário.

---

## Funcionalidades Comuns

1. **Validação de Usuário**:
   - O ID do usuário é extraído do token JWT (via middleware de autenticação).
   - Se o usuário não for encontrado no banco de dados, a rota retorna um erro `404 - Not Found`.

2. **Autenticação Necessária**:
   - As rotas estão protegidas pelo middleware `ensureAuthenticated`, garantindo que apenas usuários autenticados possam acessá-las.

---

## Requisição

### Headers
- **Authorization**: Token JWT no formato `Bearer <token>`. O token deve ser válido e gerado após a autenticação do usuário.

### Body
- Para `/profile/users/birth-date`:
  ```json
  {
    "birthDate": "1990-01-01"
  }
  ```

  # Requisições e Respostas Adicionais da API

## Requisições

### Para `/profile/users/email`:
```json
{
  "email": "new.email@example.com"
}
```

### Para `/profile/users/gender`:
```json
{
  "gender": "masculine"
}
```

---

## Respostas (Sucesso - Status Code: 200)

### Para `/profile/users/birth-date`:
```json
{
  "message": "Birth date updated successfully"
}
```

### Para `/profile/users/email`:
```json
{
  "message": "E-mail updated successfully"
}
```

### Para `/profile/users/gender`:
```json
{
  "message": "Gender updated successfully"
}
```

# Documentação das Rotas de Atualização de Dados do Usuário

---

## Descrição

As rotas `/profile/users/level`, `/profile/users/name`, `/profile/users/password`, `/profile/users/phone-number` e `/profile/users/points` são utilizadas para atualizar informações específicas do perfil do usuário autenticado. Cada rota permite a atualização de um campo específico, como nível, nome, senha, número de telefone ou pontos.

> **Importante**: Todas as rotas requerem autenticação. Apenas usuários autenticados podem acessá-las.

---

## Endpoints

### PATCH `/profile/users/level`
- **Descrição**: Atualiza o nível do usuário autenticado.
- **Funcionalidade**: Recebe um novo valor numérico e atualiza o campo `level` do perfil do usuário.

### PATCH `/profile/users/name`
- **Descrição**: Atualiza o nome do usuário autenticado.
- **Funcionalidade**: Recebe um novo nome e atualiza o campo `name` do perfil do usuário.

### PATCH `/profile/users/password`
- **Descrição**: Atualiza a senha do usuário autenticado.
- **Funcionalidade**: Recebe uma nova senha e atualiza o campo `password` do perfil do usuário.

### PATCH `/profile/users/phone-number`
- **Descrição**: Atualiza o número de telefone do usuário autenticado.
- **Funcionalidade**: Recebe um novo número de telefone e atualiza o campo `phoneNumber` do perfil do usuário.

### PATCH `/profile/users/points`
- **Descrição**: Atualiza os pontos do usuário autenticado.
- **Funcionalidade**: Recebe um valor numérico e incrementa ou decrementa o campo `points` do perfil do usuário.

---

## Funcionalidades Comuns

1. **Validação de Usuário**:
   - O ID do usuário é extraído do token JWT (via middleware de autenticação).
   - Se o usuário não for encontrado no banco de dados, a rota retorna um erro `404 - Not Found`.

2. **Autenticação Necessária**:
   - As rotas estão protegidas pelo middleware `ensureAuthenticated`, garantindo que apenas usuários autenticados possam acessá-las.

---

## Requisição

### Headers
- **Authorization**: Token JWT no formato `Bearer <token>`. O token deve ser válido e gerado após a autenticação do usuário.

### Body
- Para `/profile/users/level`:
  ```json
  {
    "level": 5
  }
  ```

  ### Para `/profile/users/name`:
```json
{
  "name": "John Doe"
}
```

### Para `/profile/users/password`:
```json
{
  "password": "newPassword123"
}
```

### Para `/profile/users/phone-number`:
```json
{
  "phoneNumber": "+1234567890"
}
```

### Para `/profile/users/points`:
```json
{
  "points": 100
}
```

---

## Respostas (Sucesso - Status Code: 200)

### Para `/profile/users/level`:
```json
{
  "message": "Level updated successfully"
}
```

### Para `/profile/users/name`:
```json
{
  "message": "Name updated successfully"
}
```

### Para `/profile/users/password`:
```json
{
  "message": "Password updated successfully"
}
```

### Para `/profile/users/phone-number`:
```json
{
  "message": "Phone number updated successfully"
}
```

### Para `/profile/users/points`:
```json
{
  "message": "Points updated successfully"
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

**Descrição:** Ocorre quando o usuário autenticado não é encontrado no banco de dados.

```json
{
  "message": "User not found"
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

# Documentação da Rota de Exclusão de Perfil

---

## Descrição

A rota `/profile/me` (método `DELETE`) é utilizada para excluir permanentemente o perfil do usuário autenticado. Essa operação remove todos os dados associados ao usuário no banco de dados, incluindo informações pessoais, avatar, capa e outros campos relacionados.

> **Importante**: Esta rota requer autenticação. Apenas o próprio usuário autenticado pode excluir seu perfil.

---

## Endpoint

### DELETE `/profile/me`

---

## Funcionalidades

1. **Exclusão de Perfil**:
   - A rota utiliza o ID do usuário extraído do token JWT para localizar e excluir o perfil correspondente no banco de dados.
   - Se o usuário não for encontrado, a rota retorna um erro `404 - Not Found`.

2. **Autenticação Necessária**:
   - A rota está protegida pelo middleware `ensureAuthenticated`, garantindo que apenas usuários autenticados possam acessá-la.

3. **Exclusão Permanente**:
   - Após a exclusão, todos os dados do usuário são removidos permanentemente do sistema.

---

## Requisição

### Headers
- **Authorization**: Token JWT no formato `Bearer <token>`. O token deve ser válido e gerado após a autenticação do usuário.

### Parâmetros
- Nenhum parâmetro adicional é necessário na requisição, pois o ID do usuário é extraído automaticamente do token JWT.

---

## Respostas

### Sucesso (Status Code: 204)
Retorna uma resposta sem conteúdo, indicando que o membro foi removido com sucesso.

```json
{}
```

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

**Descrição:** Ocorre quando o usuário autenticado não é encontrado no banco de dados.

```json
{
  "message": "User not found"
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

