---
title: Sobrevivendo através do Proxy no Linux
draft: false
description: >-
  Dependendo da política de segurança em determinada organização podemos nos
  deparar com um servidor Proxy. Tive algumas dores de cabeça ao utilizar
  ferramentas como Git, Gem, Bundle e Aptitude(ou Apt-get) devido à algumas
  configurações necessárias no sistema operacional.
pubDatetime: 2011-08-31T03:00:00.000Z
tags:
  - Linux
---

Dependendo da política de segurança em determinada organização podemos nos deparar com um servidor \[Proxy]\([http://pt.wikipedia.org/wiki/Proxy](http://pt.wikipedia.org/wiki/Proxy)).

Tive algumas dores de cabeça ao utilizar ferramentas como Git, Gem, Bundle e Aptitude(ou Apt-get) devido à algumas configurações necessárias no sistema operacional.

No Ubuntu essas configurações são feitas acessando o menu \*\*Configurações \*\*-> \*\*Rede \*\*-> \*\*Proxy da Rede\*\*

Se o proxy pedir autenticação é preciso definir o usuário e senha no botão “Detalhes”. Mesmo com essas configurações e aplicando em todo o sistema, as ferramentas que são utilizadas pelo terminal não poderão autenticar no proxy. O detalhe esta em algumas configurações extras.

para o Aptitude(ou Apt-get) devemos alterar o arquivo apt.conf em:

```
/etc/apt/apt.conf
```

E adicionar as informações do usuário para autenticação da seguinte maneira:

```
Acquire::http::proxy "http\://SeuUsuário:Senha\@EndereçodoProxy:Porta/"
```

Agora para o Git, Gem e Bundle é preciso exportar as variáveis de ambiente no aquivo profile. Abra o aquivo:

```
nano \~/.profile
```

E defina as variáveis de ambiente no final do arquivo:

```
http\_proxy=http\://SeuUsuário:Senha\@EndereçodoProxy:Porta/

https\_proxy=http\://SeuUsuário:Senha\@EndereçodoProxy:Porta/

HTTP\_PROXY=http\://SeuUsuário:Senha\@EndereçodoProxy:Porta/

export http\_proxy https\_proxy HTTP\_PROXY

salve o arquivo e seja feliz!
```
