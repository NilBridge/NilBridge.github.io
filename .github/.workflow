name: 'github actions build and deploy gh-pages'
on: 
  push:
    branches:
      - master
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest  
    steps:
      - name: Checkout
        uses: actions/checkout@v2.3.1   
        with: 
          persist-credentials: false
      - name: install and build
        run: |        
          npm install
          npm run build
      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@3.5.9
        with: 
          ACCESS_TOKEN: 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
          BRANCH: gh-pages
          FOLDER: docs/.vuepress/dist
