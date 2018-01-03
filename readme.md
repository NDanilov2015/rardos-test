# rardos-test 1.0 raw alpha

Old vintage "MS-DOS Rar Archivator" user interface emulator (small part of this program)

# Description
This project is built using javascript framework VueJS 2 and new CSS Grid technology; also I used few CSS Flex. This web app simulating small part of vintage program "RAR Archiver" which was popular in mid-1990s in Russia and in space of the former USSR. Namely, I emulate the window of .rar archive tester)))

Example of started app in initial mode:
![alt text](https://raw.githubusercontent.com/NDanilov2015/rardos-test/master/Initial state.png)

Please, hit down "Start" button and you will see running list of "files" and running percentage indicator in old vintage MS-DOS style! We will emulate run of "testing files in rar archive" interface.

Example of started app in "file list" mode:
![alt text](https://raw.githubusercontent.com/NDanilov2015/rardos-test/master/Running state.png)

Font size and working windows size vary flexibly depending on the browser window size and the screen resolution (like the command line window, e.g. PowerShell or Cygwin terminal window).

## Getting Started

a) For immediately enjoying, you can simply following a link:
[https://ndanilov2015.github.io/vue-dos-ui1](https://ndanilov2015.github.io/vue-dos-ui1/)

b) Or you can download this repository as .zip-file on your local machine, unpack it and starting index.html file in browser:
[https://github.com/NDanilov2015/vue-dos-ui1.git](https://github.com/NDanilov2015/vue-dos-ui1.git/) 


### Prerequisites

a) This app require newest versions of browsers (tested in Google Chrome, Mozilla Firefox, Opera) which support of CSS Grid technology.

b) This app was developed for using with devices with screen resolution > 1024x600.


### Building from /src folder scratch

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

>>screenshot

## Built With
* [VueJS 2.3](http://www.vuejs.org/) - The javascript nice framework
* CSS Grid - the new technology of site layout building

## Change log
21.06.2017 - The basic version was builded on my localhost development computer

04.01.2018 - I remember about this project, correct some errors and the basic "summer" version is pushed to Github.

PLANNED - GTD:
 - "Time consumed" counter should be run!
 - correction of CSS code, styles, font-sized
 - add some "Statistics" data to right-bottom section
 - Result column Error should be red color text)