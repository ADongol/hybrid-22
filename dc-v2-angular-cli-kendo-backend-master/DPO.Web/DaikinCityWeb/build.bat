echo Daikin City Post Build Script
REM call "$(ProjectDir)build.bat" 

copy /Y "index.html" "daikincityweb\index.html"

java -jar "closure\compiler.jar" ^
--js "daikincityweb\js\daikincity.js" ^
--js_output_file "daikincityweb\js\daikincity.min.js" ^
--compilation_level SIMPLE_OPTIMIZATIONS ^
--warning_level QUIET ^
--summary_detail_level 3