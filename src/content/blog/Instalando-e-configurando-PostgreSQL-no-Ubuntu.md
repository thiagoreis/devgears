---
title: Instalando e configurando PostgreSQL no Ubuntu
draft: false
description: >-
  Lembro que no início das minhas aventuras no mundo do desenvolvimento web
  fazer a configuração de um ambiente PostgreSQL no Linux era uma tarefa
  dolorosa, talvez pela falta de conhecimento necessário ou por nao saber o
  local exato de fazer cada configuração. 
pubDatetime: 2015-03-20T03:00:00.000Z
tags:
  - Linux
  - 'PostgreSQL '
---

Lembro que no início das minhas aventuras no mundo do desenvolvimento web fazer a configuração de um ambiente PostgreSQL no Linux era uma tarefa dolorosa, talvez pela falta de conhecimento necessário ou por nao saber o local exato de fazer cada configuração. Instalar era fácil usando o apt-get, mas lembro que depois disso não sabia como logar com o usuário postgre ou pelo menos alterar a senha do usuário padrão. Outro detalhe era fazer o serviço do postgre aceitar conhexões locais ou de um IP específico.

Hoje em dia depois de muitos anos usando o sistema do Pinguim essa tarefa não é mais tão complicada assim. O objetivo desse post é deixar registrada uma maneira fácil de instalar e configurar o PG no Ubuntu.Vamos baixar a versão 9.4 do PostgreSQL disponível no repositório oficial.

No terminal execute o seguinte comando:

```
apt-get -y install postgresql postgresql-contrib
```

após a instalação, execute o comando psql passando o usuário postgre para fazer a alteração da senha:

```
sudo -u postgres psql
```

faça a alteração da senha:

```
ALTER USER postgres PASSWORD 'newpassword';
```

para sair do prompt de comando do postgre digite \q e depois enter:

agora é preciso fazer uma alteração no arquivo pg\_hba.conf para permitir todas as conexões locais:

abaixo da linha onde está definido “#Database administrative login by Unix domain socket” é preciso alterar as informações de:

```
local   all         postgres             peer

para:

local   all         postgres            trust

uma configuração opcional a fazer é alterar a forma que o postgre “escutará” as conexões, defina um ip específico ou localhost se for somente para desenvolvimento local. Essa alteração é feita no arquivo postgresql.conf:

no meu caso só precisei descomentar a linha. 

feito todas as configurações reinicie o serviço:

sudo /etc/init.d/postgresql restart

pronto, agora é possível conectar via linha de comando ou via ferramenta gráfica como por exemplo o pgadmin3 que pode ser instalado via apt-get:

sudo apt-get install pgadmin3

feito isso a configuração do ambiente postgreSQL estará concluída.

fonte: \[http\://www\.hackido.com]\(http\://www\.hackido.com/2014/04/setting-up-postgres-for-local.html)
```
