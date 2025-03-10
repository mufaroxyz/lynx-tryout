#!/bin/bash

# Much needed workaround for android devices https://github.com/lynx-family/lynx-stack/issues/89#issuecomment-2708815150

CURRENT_IP=$(ip route get 1.1.1.1 | awk '{print $7; exit}')

if [ -z "$CURRENT_IP" ]; then
  echo "Error: Could not determine current IP address"
  exit 1
fi

CONFIG_FILE=$(find "$(pwd)" -name "lynx.config.ts" -type f | head -n 1)

if [ -f "$CONFIG_FILE" ]; then
  HOST_LINE=$(grep -n "host:" "$CONFIG_FILE" | cut -d ":" -f 1 | head -n 1)
  
  if [ -n "$HOST_LINE" ]; then
    sed -i "${HOST_LINE}s/host:.*$/host: '$CURRENT_IP',/" "$CONFIG_FILE"
    echo "Updated host in $CONFIG_FILE to $CURRENT_IP"
  else
    SERVER_LINE=$(grep -n "server: {" "$CONFIG_FILE" | cut -d ":" -f 1 | head -n 1)
    
    if [ -n "$SERVER_LINE" ]; then
      PORT_LINE=$(grep -n "port:" "$CONFIG_FILE" | cut -d ":" -f 1 | head -n 1)
      
      if [ -n "$PORT_LINE" ]; then
        sed -i "${PORT_LINE}a\\    host: '$CURRENT_IP'," "$CONFIG_FILE"
        echo "Added host: '$CURRENT_IP' to server config in $CONFIG_FILE"
      else
        sed -i "${SERVER_LINE}a\\    host: '$CURRENT_IP'," "$CONFIG_FILE"
        echo "Added host: '$CURRENT_IP' to server config in $CONFIG_FILE"
      fi
    else
      echo "Error: Could not find 'server' configuration in $CONFIG_FILE"
      exit 1
    fi
  fi
else
  echo "Error: Config file not found: lynx.config.ts"
  exit 1
fi