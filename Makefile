install: install_package

build: build_package

install_package:
	@echo "--> Beginning installation of all node dependencies and packages"
	@npm run build >/dev/null 2>&1
	@echo "--> Completed installation of all node dependencies and packages"

build_package:
	@echo "--> Building Executable"
	@echo "#!/bin/bash \n  npm run server" > run_server
	@chmod 700 run_server
	@echo "--> Created Executable"s
