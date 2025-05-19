


export function returnEmailTempleteActivation(title: string, h2: string, name: string, activationCode: string | number, description: string): string {
  const emailTemplate = `<!DOCTYPE html>
    <html lang="pt">
    <head>
      <meta charset="UTF-8">
      <title>{{title}}- BSmart</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f2f4f8;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 600px;
          margin: 40px auto;
          background-color: #ffffff;
          border-radius: 8px;
          padding: 30px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        h2 {
          color: #333;
        }
        p {
          color: #555;
          line-height: 1.5;
        }
        .code {
          font-size: 24px;
          font-weight: bold;
          color: #1a73e8;
          background-color: #eef3fc;
          padding: 12px 20px;
          border-radius: 6px;
          text-align: center;
          letter-spacing: 2px;
          margin: 20px 0;
        }
        .footer {
          font-size: 13px;
          color: #888;
          margin-top: 30px;
          text-align: center;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h2>{{h2}}</h2>
        <p>Olá, <strong>{{name}}</strong>.</p>
        <p>{{description}}</p>
    
        <div class="code">{{CODIGO}}</div>
    
        <p>Este código é válido por tempo limitado. Se você não solicitou esta conta, pode ignorar este e-mail.</p>
    
        <p>Estamos muito felizes em ter você conosco!<br>
        — Equipe BSmart 🚀</p>
    
        <div class="footer">
          &copy; BSmart {{ANO}}. Todos os direitos reservados.
        </div>
      </div>
    </body>
    </html>
    `
  const html = emailTemplate
    .replace("{{title}}", title)
    .replace("{{h2}}", h2)
    .replace("{{name}}", name)
    .replace("{{description}}", description)

    .replace('{{CODIGO}}', String(activationCode))
    .replace('{{ANO}}', new Date().getFullYear().toString());

  return html
}

export function returnEmailTempleteReset(name: string, activationCode: string) {
  const emailTemplate = `
  <!DOCTYPE html>
<html lang="pt">
<head>
  <meta charset="UTF-8">
  <title>Redefinição de Senha - BSmart</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f2f4f8;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 40px auto;
      background-color: #ffffff;
      border-radius: 8px;
      padding: 30px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
    h2 {
      color: #333;
    }
    p {
      color: #555;
      line-height: 1.5;
    }
    .code {
      font-size: 24px;
      font-weight: bold;
      color: #1a73e8;
      background-color: #eef3fc;
      padding: 12px 20px;
      border-radius: 6px;
      text-align: center;
      letter-spacing: 2px;
      margin: 20px 0;
    }
    .footer {
      font-size: 13px;
      color: #888;
      margin-top: 30px;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>Redefinição de Senha - BSmart</h2>
    <p>Olá, <strong>{{NOME}}</strong>.</p>
    <p>Recebemos uma solicitação para redefinir a sua senha. Para continuar com o processo, use o código abaixo:</p>

    <div class="code">{{CODIGO}}</div>

    <p>Este código é válido por 5 minutos. Se você não solicitou essa alteração, pode ignorar este e-mail.</p>

    <p>Estamos à disposição para qualquer dúvida!<br>
    — Equipe BSmart 🚀</p>

    <div class="footer">
      &copy; BSmart {{ANO}}. Todos os direitos reservados.
    </div>
  </div>
</body>
</html>
`

  const html = emailTemplate
    .replace("{{NOME}}", name)

    .replace('{{CODIGO}}', String(activationCode))
    .replace('{{ANO}}', new Date().getFullYear().toString());
  return html
}