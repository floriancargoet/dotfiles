#!/bin/sh

#paths
SCRIPT_FILE=$(readlink -f $0)
SCRIPT_DIR=$(dirname $SCRIPT_FILE)

cd "$SCRIPT_DIR/dotfiles"
for file in *
do
    if [ ! -e "$HOME/.$file" ]
    then 
        ln -s "$(readlink -f $file)" "$HOME/.$file" && echo "$file installed"
    else
        echo "~/.$file already exists"
    fi
done
cd - > /dev/null
