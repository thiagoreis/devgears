---
title: Instalando Zoneminder no Fedora 15
draft: false
description: >-
  ZoneMinder é uma aplicação para monitoramento de câmeras de vigilância, com
  funções avançadas de DVR(Digital Video Recording) e detecção de movimentos.
  Tem suporte a diversos tipos de câmeras como: cameras USB, IP, e câmeras com
  funções Pan/Tilt/Zoom.
pubDatetime: 2011-07-20T03:00:00.000Z
tags:
  - Linux
---

\## Instalando Zoneminder no Fedora 15

ZoneMinder é uma aplicação para monitoramento de câmeras de vigilância, com funções avançadas de DVR(Digital Video Recording) e detecção de movimentos. Tem suporte a diversos tipos de câmeras como: cameras USB, IP, e câmeras com funções Pan/Tilt/Zoom.

É um software de código aberto escrito nas linguagens C++, Perl e PHP. A monitoração é feita através de uma interface Web que roda sobre o servidor Apache, as informações de configuração e os vídeos ou eventos gravados são armazenados no banco de dados MySQL.

Instalação:

\### 1- Definindo o repositório Fusion:

```
yum install \[http\://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-stable.noarch.rpm]\(http\://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-stable.noarch.rpm)
```

\### 2- Instalando os requisítos:

```
yum install mysql-server mysql-devel pcre-devel ffmpeg ffmpeg-devel netpbm-progs

3 – Iniciando os serviços MySQL e Apache:

service httpd start

start service mysqld start

4- Instalação do Zoneminder:

yum install zoneminder

5- Habilitando VirtualHost para o Zoneminder:

Usando um editor de texto(no meu caso o Gedit) abra o arquivo zoneminder.conf na pasta de configuração do Apache:

gedit /etc/httpd/conf.d/zoneminder.conf

Comente a linha:

Deny from all # DELETE THIS LINE

salve e reinicie os serviços:

service httpd reload

service httpd restart
```

\### 6- Criando o banco de dados e tabelas:

```
mysql -u root -p \< /usr/share/zoneminder/db/zm\_create.sql
```

\### 7- Iniciar o serviço do Zoneminder:

```
service zoneminder start
```

\### 8- Editando o PHP.ini

```
Abra o arquivo php.ini com um editor de texto e altere a opção:

short\_open\_tag “off” para “on”.

Tudo certo. Agora é só abrir no seu navegador o seguinte endereço:

http\://localhost/zoneminder.
```
