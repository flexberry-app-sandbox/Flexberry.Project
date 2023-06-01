docker build --no-cache -f SQL\Dockerfile.PostgreSql -t project/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t project/app ../..
