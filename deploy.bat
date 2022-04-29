chcp 65001

cd docs/.vuepress/dist

echo nilbridge.site > CNAME

git init
git add .
git commit -m "%date% %time% 更新"
git remote add origin https://github.com/nilbridge/nilbridge.github.io.git
git push -u origin "gh-pages" -f


pause