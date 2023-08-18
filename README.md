# church_docker
docker container with script to download all repositories

## STEP 1: Run python script to pull down all repos (not enabled)
```
python run fetch_repos.py
```

## STEP 2: Run Docker from root folder
```
docker-compose up -d --build
```

## Step 3: Stop Docker
```
docker-compose stop
```
