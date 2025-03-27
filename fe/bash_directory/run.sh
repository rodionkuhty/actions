#!/bin/bash
echo "Hello github actions from docker container"
echo "This is a bash script running inside a Docker container."
echo "Current date and time: $(date)"
echo "This script is running in the directory: $(pwd)"
echo "List of files in the current directory:"
ls -l
echo "End of script."
curl http://playwright:3000