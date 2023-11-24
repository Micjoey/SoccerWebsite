#!/bin/bash

# Read secrets
export POSTGRES_DB=$(cat /run/secrets/SoccerWebsiteDb)
export POSTGRES_USER=$(cat /run/secrets/Admin)
export POSTGRES_PASSWORD=$(cat /run/secrets/SoccerWebsitePwd)

# Execute the original entrypoint script
exec docker-entrypoint.sh postgres
