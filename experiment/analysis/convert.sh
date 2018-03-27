# node src/convert.js results/trialData.json > results/trialData.csv
#node src/convert.js results/data.json > results/trial-19-Jul-2017.csv
node src/convert2.js results/data.json > results/trial.csv
echo "Converting results/data.json to results/trial.csv based on the fields in src/convert.js."
