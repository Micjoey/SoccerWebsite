#!/bin/bash

# Check if a component name was provided
if [ -z "$1" ]
then
  echo "Please specify a component name"
  exit 1
fi

# Create a directory for the component
mkdir -p ./src/components/$1

# Create the .tsx and .scss files
cat <<EOF > ./src/components/$1/$1.tsx
import React from 'react';
import './$1.scss';

const $1: React.FC = () => {
  return (
    <div className="$1">
      {/* Component content goes here */}
    </div>
  );
};

export default $1;
EOF

cat <<EOF > ./src/components/$1/$1.scss
.$1 {
  /* Styles for $1 go here */
}
EOF

echo "Component $1 created successfully."
