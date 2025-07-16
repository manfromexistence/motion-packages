find . -maxdepth 1 -mindepth 1 -type d -exec du -sh {} + | sed 's/K/KB/; s/M/MB/; s|\./||'

git clone https://github.com/greensock/GSAP && cd GSAP && rm -rf .git && cd ..
git clone https://github.com/motiondivision/motion && cd motion && rm -rf .git && cd ..
git clone https://github.com/juliangarnier/anime && cd anime && rm -rf .git && cd ..
git clone https://github.com/pmndrs/react-spring && cd react-spring && rm -rf .git && cd ..

# Inspirations
```
6.3MB   GSAP
177MB   motion
7.0MB   anime
40MB    react-spring
```

find . -type f -not -name "README.md" "package.json" -delete
