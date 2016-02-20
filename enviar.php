<?php
   //define o cabeçalho como padrao para caracteres especiais
	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

	// Additional headers
	$headers .= 'From: Cassio Lemos Teste <k2publicidade@yahoo.com.br>' . "\r\n";


   //destinatário do email
   $para="contato@cassiolemos.com.br";

   //recebe os dados do formulário
   $nome = $_POST["nome"];
   $fone = $_POST["fone"];
   $email  = $_POST["email"];
   $endereco  = $_POST["endereco"];
   $assunto = $_POST["assunto"];
   $mensagem  = $_POST["mensagem"];


   //composição do corpo do e-mail para o destinatário
   $corpo   = "<h3>De:</h3> ";
   $corpo  .= $nome;
   $corpo  .= "<br>";
   $corpo  .= $fone;
   $corpo  .= "<br>";
   $corpo  .= $email;
   $corpo  .= "<br>";
   $corpo  .= $endereco;
   $corpo  .= "<br>";
   $corpo  .= "<h3>Mensagem</h3>";
   $corpo  .= "<p>";
   $corpo .= $mensagem;
   $corpo  .= "</p>";

   //enviar e-mail  para o destinatário
   mail($para,$assunto,$corpo,$headers);

   //mensagem de confirmação
   echo "<script>alert('Sua mensagem foi enviada com sucesso');</script>";

   //redireciona devolta para a página de contato.
   echo "<meta http-equiv='refresh' content='1;URL=index.html'>";

?>
