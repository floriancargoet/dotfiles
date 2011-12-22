#!/bin/sh

#paths
SCRIPT_FILE=$(readlink -f $0)
SCRIPT_DIR=$(dirname $SCRIPT_FILE)
ORIG_DIR=$(pwd)

install_file(){
    if [ ! -e "$HOME/.$1" ]; then
        ln -s "$(readlink -f $1)" "$HOME/.$1" && echo "$1 installed"
    else
        echo "~/.$1 already exists"
    fi
}

cd "$SCRIPT_DIR/dotfiles"

# automated installation

for file in * ; do
    if [ -f $file ]; then
        install_file $file
    fi
done

# manual installation
#geany
if [ ! -e "$HOME/.config/geany" ]; then
    ln -s "$(readlink -f config/geany)" "$HOME/.config/geany" && echo "config/geany/ installed"
else
    echo "~/.config/geany/ already exists"
fi


cd $ORIG_DIR
