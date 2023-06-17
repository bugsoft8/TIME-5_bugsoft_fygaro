# Fygaro

> Whitepace (landing Page - Responsive)

## 🚀 Demanda

O projeto será focado em trazer o nicho das barbearias para algo similar a um marketplace onde cada barbearia contará com um perfil próprio o qual poderá modificar com suas informações aumentando sua exposição para atrair clientes novos, permitindo também aos donos das barbearias um certo nível administrativo de seus negócios podendo realizar agendamentos e vendas de produtos diretamente através do app, e para o usuário cliente das barbearias o app providenciará uma forma facil e rapida de pesquisa de barbearias que agradem seu gosto.

### 💻 Figma:

[PROTOTIPO DE ALTA FIDELIDADE - Fygaro](https://www.figma.com/file/Uv7Htdo0BNd3pLWk2K850K/Fygaro?type=design&node-id=2%3A1544&t=dIAvVHeuXbty2BKh-1)

## GIT

### Branch
> Deve ser criardo uma nova branch para cada página nova, seguindo o padrão de nomenclatura já definida no trello.
    - **EXEMPLO** Para criar a página `register`.
    1 - Crie primeiro uma branch chamada `register`, usando o comando: ```git checkout -b register```.
    2 - A partir disso, crie uma pasta usando o mesmo nome.
    3 - para sicronizar a sua branch com o repositório remoto, utilize: ```git push -u origin register```.

### Commit
> Siga o padrão de nomeclatura definidas para os commits.
    - Nomes.
        - **OBRIGATIO, sempre ser usado**

        - `feat:` São adições de novas funcionalidades.
        - `fix:` Correções de bugs.
        - `refactor:` Mudanças de código que não corrige um bug ou adiciona novas funcionalidades.
        - `style:` Alterações referentes a formatações na apresentação do código que não afetam o significado do código, como por exemplo: espaço em branco, formatação, ponto e vírgula ausente etc.
        - `revert:` Resverter um commit já realizado.
        - `docs:` Inclusão ou alteração somente de arquivos de documentação.
        - `chore:` Mudança externa que não afeta o codigo em si, (ex: mudanças no .gitignore)

    - Escopo.
        - **OPCIONAL, usar quando sentir ser necessario**

        - `():` Escopo serve para fornece mais contexto sobre o problema.

    - **EXEMPLO** de commit.
        *sem escopo*
        - `feat: add header`
        *com escopo*
        - `refactor(header): change position of button`



## Entendendo decisões arquiteturais e a estrutura do projeto

### Estrutura do projeto

```
📁 TIME-5_bugsoft_fygaro
└── 📁 src
    ├── 📁 assets
    │   ├── 📁 icons
    │   └── 📁 images
    ├── 📁 components
    │   ├── 📁 header
    │   |   ├── 📄 index.html
    │   |   └── 📄 style.css
    |   └── 📁 ... 
    └── 📁 pages
        ├── 📁 login
        |   ├── 📄 index.html
        |   └── 📄 style.css
        └── 📁 barbeshop
            ├── 📄 ...
            └── 📄 ...

```
### Como me localizar no projeto?

- `./src/assets` Contem todas as imagens e icons utilizadas nesse projeto
- `./src/components`: Deve ser usada para armazenar componentes reutilizáveis
- `./src/pages`: Todas as páginas do projeto estão listadas em `./src/pages`.
    - Para cada nova página, deve ser criada uma nova pasta que contenha os arquivos `.html` e `.css` respectivos a essa página.
        - Exemplo de diretorio `./src/pages/register`, contendo `index.hmtl` e `style.css`
        - Siga o padrão de nomenclatura das pastas já definidas no trello.

## 🤝 Colaboradores

Agradecemos às seguintes pessoas que contribuíram para este projeto:

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/CarlosFeliponi">
        <img src="https://avatars.githubusercontent.com/u/107933029?v=4" width="100px;" alt="Carlos Feliponi Github"/><br>
        <sub>
          <b>Carlos Feliponi</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/lucasSchneider1999">
        <img src="https://avatars.githubusercontent.com/u/129910935?v=4" width="100px;" alt="Lucas Schneider Github"/><br>
        <sub>
          <b>Lucas Schneider</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/Exxodius">
        <img src="https://avatars.githubusercontent.com/u/119608284?v=4" width="100px;" alt="Gabriel Pletsch Github"/><br>
        <sub>
          <b>Gabriel Pletsch</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/gustavoronan">
        <img src="https://avatars.githubusercontent.com/u/129910842?v=4" width="100px;" alt="Gustavo Ronan Github"/><br>
        <sub>
          <b>Gustavo Ronan</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/carlosantunesfoz">
        <img src="https://avatars.githubusercontent.com/u/107901738?v=4" width="100px;" alt="Carlos Antunes Github"/><br>
        <sub>
          <b>Carlos Antunes</b>
        </sub>
      </a>
    </td>
  </tr>
</table> 