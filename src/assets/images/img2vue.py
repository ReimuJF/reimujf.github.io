import glob

files =  glob.glob('*.svg')
for file in files:
    with open(file, 'r') as frd, open(f'{file.replace('.svg', '').capitalize()}Component.vue', 'w') as fwrt:
            fwrt.write(f'<template>{frd.read()}</template>')

input()