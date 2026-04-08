# 📱 PokeApp - Ionic + Angular + Capacitor

Aplicativo mobile desenvolvido com **Ionic + Angular (NgModules)** consumindo a API pública do Pokémon.

👉 Projeto acadêmico com foco em:
- Tabs navigation
- Consumo de API
- Estrutura Angular tradicional (sem standalone)

---

## 🚀 Tecnologias utilizadas

- Ionic Framework
- Angular (com NgModules)
- Capacitor
- TypeScript
- HTML + SCSS
- API REST (PokéAPI)

---

## 📸 Screenshots

### 🏠 Home (Lista de Pokémons)
![Home](./screenshots/home.png)

### 🔍 Buscar Pokémon
![Buscar](./screenshots/buscar.png)

### ℹ️ Sobre
![Sobre](./screenshots/sobre.png)

> 💡 Crie uma pasta chamada `screenshots` e adicione suas imagens lá.

---

## 📂 Estrutura do Projeto
src/app
│
├── tabs/
├── tab1/ → Lista de Pokémons
├── tab2/ → Busca Pokémon
├── tab3/ → Sobre o app
│
├── app.module.ts
├── app-routing.module.ts


---

## ⚙️ Como rodar o projeto

### 1 Instalar dependências

```bash
npm install
```
### 2️⃣ Rodar no Navegador
```bash
ionic serve
```
### 3️⃣ Rodar no Celular
```bash
ionic build
npx cap add android
npx cap open android
```

## Exemplo de EndPoint e API utilizada
https://pokeapi.co/api/v2/pokemon?limit=20

📱 Funcionalidades

✔ Listagem de Pokémons
✔ Busca por nome
✔ Navegação por abas (Tabs)
✔ Consumo de API externa
✔ Estrutura modular Angular

📌 Conceitos aplicados
Lazy Loading (loadChildren)
HttpClient
Lifecycle Ionic (ionViewWillEnter)
Componentização
Rotas com Tabs
⚠️ Observações importantes
Projeto configurado com NgModules (não standalone)
Compatível com Angular 20
Evitar misturar versões diferentes do Angular
👨‍💻 Autor

Desenvolvido por Alexsandro

📄 Licença

Este projeto é apenas para fins educacionais.