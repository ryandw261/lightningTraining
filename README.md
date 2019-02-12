# SFDX- Salesforce Developer Experience:

The Salesforce Developer Experience (DX) is a set of tools that streamlines the entire development life cycle. It improves team development and collaboration, facilitates automated testing and continuous integration, and makes the release cycle more efficient and agile.

# What is a Scratch Org?

A scratch org is a dedicated, configurable, and short-term Salesforce environment that you can quickly spin up when starting a new project, a new feature branch, or a feature test.

# What is a Developer Hub Org?

A Developer Hub (Dev Hub) is the main Salesforce org that you and your team use to create and manage your scratch orgs.

# Setting up SFDX development path:

* Signup for Salesforce DX trial edition- https://developer.salesforce.com/promotions/orgs/dx-signup 

* Install GIT- https://git-scm.com/downloads 

* Enable Dev Hub- https://developer.salesforce.com/docs/atlas.en-us.216.0.sfdx_setup.meta/sfdx_setup/sfdx_setup_enable_devhub.htm

* Install the Command Line Interface (CLI) – 
    * macOS 	https://sfdc.co/sfdx_cli_osx 
    * Windows 32-bit 	https://sfdc.co/sfdx_cli_win 
    * Windows 64-bit 	https://sfdc.co/sfdx_cli_win64 
    
* Verify CLI- type command sfdx and sfdx force --help

* Login to Development environment (Dev Hub)- sfdx force:auth:web:login -d -a SFLX
    * -d is for default
    * -a is for alias, passing argument SFLX
    
* Pull a project from GIT
    * mkdir LX [making a directory on your desktop or ducuments]
    * cd LX [open the directory]
    * git clone https://github.com/godarapradeep/lightning [clone sflx project]
    * cd bootcamp [open the directory]

 * Create and Test Our Scratch Org
    * sfdx force:org:create -s -f config/project-scratch-def.json -a bootcamp
        * -s is for scratch org
        * -f is for config file, passing argument
        * -a is for alias
    * sfdx force:org:open
    
 * Push hello world to the scratch org and test
    * sfdx force:source:pull --forceoverwrite
    * sfdx force:source:push
    * go to link: /c/helloworld.app
    
 * Setting up visual studio:
    * VS Code https://code.visualstudio.com/download 
    * Install Salesforce extensions https://marketplace.visualstudio.com/items?itemName=salesforce.salesforcedx-vscode
    
# References:
* https://education.github.com/git-cheat-sheet-education.pdf
* https://github.com/godarapradeep/lightning
