Testing ES6 / Babel / Sprockets
===============================

* Run `bundle install` then `rails server`
* Open `http://localhost:3000`
* In principle you should see **two** alert boxes coming from [here](https://github.com/claudiob/testing-es6-babel-exports/blob/master/app/assets/javascripts/01_works.es6) and [here](https://github.com/claudiob/testing-es6-babel-exports/blob/master/app/assets/javascripts/02_does_not_work.es6)
* However the second one does not work causing `ReferenceError: Can't find variable: exports`