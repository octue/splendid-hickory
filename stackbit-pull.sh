rm -rf public
rm -rf .cache
rm -rf src/data
rm -rf src/pages
rm site-metadata.json
export STACKBIT_API_KEY=745a1142d6648646559f44add2ed8e27d35a792a91a2f2379c1780df4a0eb5ce
npx @stackbit/stackbit-pull --stackbit-pull-api-url=https://api.stackbit.com/pull/5e7342199f57d900137e1787