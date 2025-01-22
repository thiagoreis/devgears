---
title: Multi Upload no CakePHP sem precisar usar magia negra
draft: false
description: >-
  Quando se trata de Upload de arquivos no CakePHP temos diversas opções como
  MeioUpload, Uploader, Media Plugin entre outros. Depois de vários testes o que
  mais se destacou no quesito “Upload de múltiplos arquivos” foi o Ajax Multi
  Upload.
pubDatetime: 2012-08-28T03:00:00.000Z
---

Quando se trata de Upload de arquivos no CakePHP temos diversas opções como MeioUpload, Uploader, Media Plugin entre outros. Depois de vários testes o que mais se destacou no quesito “Upload de múltiplos arquivos” foi o Ajax Multi Upload.

Então vamos para o exemplo de implementação do plugin em uma aplicação.

Baixando e Instalando

É preciso baixar o plugin e extrair no diretório Plugin de sua aplicação, para facilitar usarei o Git para clonar o repositório, supondo que você esteja no diretório App do projeto execute o comando:

php

git clone https\://srs81\@github.com/srs81/CakePHP-AjaxMultiUpload.git Plugin/AjaxMultiUpload

Esse comando irá clonar os arquivos do projeto original na pasta AjaxMultiUpload. O proximo passo é carregar o plugin no bootstrap do Cake. Abra o arquivo bootstrap.php na pasta Config e adicione a seguinte linha:

php CakePlugin::load('AjaxMultiUpload');

Se preferi pode usar CakePlugin::loadAll(); para carregar automaticamente todos os plugins do diretório Plugin.

Criando diretório

Crie o diretório files dentro de webroot:

php mkdir webroott/files

Em seguida é preciso dar permissão para o diretório criado:

phpchmod 777 /webroot/files

Carregando o Helper no Controller

O carregamento do Helper pode ser feito no AppController, ficando disponível para todos os outros controllers da aplicação:

php var $helpers = array('AjaxMultiUpload.Upload');

Adicionando nas Views

Supondo que a tabela utilizada é images com a chave primária id, podemos visualizar as imagens do upload da seguinte maneira:

php\<?php $img = $this->Upload->view('Image', $image\['Image']\['id']); ?>

para fazer upload a partir do arquivo View/Images/edit.ctp:

php echo $this->Upload->edit('Image', $this->Form->fields\['Image.id']);

Exemplo do envio de arquivos:

É isso! em poucos minutos é possível implementar upload de multiplos arquivos baseado em Ajax. Vale lembrar que as informações dos arquivos enviados não são armazenadas no banco de dados, nem é preciso fazer relacionamento no banco, sendo todo gerenciamento feito pelo plugin AjaxMultiUpload.

para mais informações acesse a página do projeto no Github.
