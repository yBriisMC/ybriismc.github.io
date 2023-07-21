<!DOCTYPE html>
<html>
<head>
  <title>Autorização Mercado Pago</title>
</head>
<body>
  <h1>Autorização Mercado Pago</h1>
  <button onclick="authorize()">Autorizar</button>

  <script>
    const SEU_CLIENT_ID = 'SEU_CLIENT_ID'; // Substitua pelo seu Client ID do Mercado Pago
    const SEU_CLIENT_SECRET = 'SEU_CLIENT_SECRET'; // Substitua pelo seu Client Secret do Mercado Pago
    const SUA_URL_DE_REDIRECT = 'https://api.redeminers.com/oauth'; // Substitua pela sua URL de redirecionamento registrada no Mercado Pago

    async function authorize() {
      try {
        const response = await fetch(`https://api.mercadopago.com/oauth/token`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            grant_type: 'authorization_code',
            client_id: SEU_CLIENT_ID,
            client_secret: SEU_CLIENT_SECRET,
            code: 'SEU_CODIGO_DE_AUTORIZACAO', // Substitua pelo código de autorização obtido
            redirect_uri: SUA_URL_DE_REDIRECT,
          }),
        });

        const data = await response.json();
        const accessToken = data.access_token;
        console.log('Token de acesso obtido:', accessToken);

        // A partir deste ponto, você pode usar o token de acesso para fazer solicitações em nome do cliente autenticado
        // Exemplo: use o token de acesso para fazer solicitações à API do Mercado Pago em nome do cliente

        alert('Autorização bem-sucedida! Agora você pode fechar esta página.');
      } catch (error) {
        console.error('Erro ao obter o token de acesso:', error.message);
        alert('Erro ao obter o token de acesso. Por favor, tente novamente mais tarde.');
      }
    }
  </script>
</body>
</html>
