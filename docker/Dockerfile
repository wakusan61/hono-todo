
FROM postgres:15

# 環境変数を設定
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=postgres
ENV POSTGRES_DB=todo_db

# 初期化スクリプトをコンテナにコピー
COPY init.sql /docker-entrypoint-initdb.d/

# ポートを公開
EXPOSE 5432
