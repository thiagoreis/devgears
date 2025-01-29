---
title: Instalando Ruby 2.0.0 com RVM
draft: false
description: >-
  No dia 24 de fevereiro foi lançada a versão 2.0.0 da linguagem Ruby. Uma das
  principais características da nova versão é o
pubDatetime: 2013-02-25T03:00:00.000Z
tags:
  - Ruby
---

No dia 24 de fevereiro foi lançada a versão 2.0.0 da linguagem Ruby. Uma das principais características da nova versão é o

\[Refinements]\([http://bugs.ruby-lang.org/issues/show/4085](http://bugs.ruby-lang.org/issues/show/4085)). que visa

resolver o problema de monkey-patching. Para um melhor detalhamento das novidades do Ruby 2.0.0

\[visite este link]\([http://globaldev.co.uk/2012/11/ruby-2-0-0-preview-features/](http://globaldev.co.uk/2012/11/ruby-2-0-0-preview-features/)).

Antes de fazer a instalação, certifique-se de que o RVM esteja na última versão:

```
rvm get head
```

Em seguida instale a biblioteca libyaml-dev tendo em vista que a syck e psych estão obsoletas no Ruby 2.0.0:

\### Para Debia/Ubuntu

```
apt-get install libyaml-dev
```

\### para Fedora/CentOS/RHEL

```
yum install libyaml-devel
```

\### para Mac com Homebrew

```
brew install libyaml
```

Após a instalação das bibliotecas instale o Ruby 2.0.0:

```
rvm install ruby-2.0.0
```

Altere a versão do Ruby:

```
rvm use 2.0.0
```

É isso ai! Enjoy!

\[fonte]\([https://coderwall.com/p/tptocq](https://coderwall.com/p/tptocq))
