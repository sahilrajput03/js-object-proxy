#!/usr/bin/env bash
nodemon \
  -x 'act push' \
  -w .github/workflows/markdown-autodocs.yml
