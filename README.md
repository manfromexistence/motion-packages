find . -maxdepth 1 -mindepth 1 -type d -exec du -sh {} + | sed 's/K/KB/; s/M/MB/; s|\./||'
find . -maxdepth 1 -mindepth 1 -not \( -name "src" -o -name "types" \) -print0 | xargs -0 rm -r

git clone https://github.com/greensock/GSAP && cd GSAP && find . -maxdepth 1 -mindepth 1 -not \( -name "src" -o -name "types" \) -print0 | xargs -0 rm -r && cd ..
git clone https://github.com/motiondivision/motion && cd motion && find . -maxdepth 1 -mindepth 1 -not -name "packages" -print0 | xargs -0 rm -r && cd ..
git clone https://github.com/juliangarnier/anime && cd anime && find . -maxdepth 1 -mindepth 1 -not \( -name "src" -o -name "types" \) -print0 | xargs -0 rm -r && cd ..
git clone https://github.com/pmndrs/react-spring && cd react-spring && find . -maxdepth 1 -mindepth 1 -not -name "packages" -print0 | xargs -0 rm -r && cd ..

# Inspirations
```
6.3MB   GSAP
177MB   motion
7.0MB   anime
40MB    react-spring
```

