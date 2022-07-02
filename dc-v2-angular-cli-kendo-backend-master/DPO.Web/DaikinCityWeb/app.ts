class Main
{
    static main()
    {
        new daikincity.DCExperience();
    }
}

window.onload = () =>
{
    Main.main();
};

// global functions
function openTermsConditions()
{
    var left = screen.width / 2 - 450;
    var top = screen.height / 2 - 320;
    window.open('/Home/PrivacyPolicy', 'DaikinTCS', 'width=900, height=640, left=' + left + ', top=' + top + ', toolbar=no, menubar=no, scrollbars=yes, resizable=no, location=no, directories=no, status=no');
}

function openContactForm()
{
    var left = screen.width / 2 - 450;
    var top = screen.height / 2 - 320;
    window.open('/Account/ContactRequest', 'DaikinTCS', 'width=900, height=640, left=' + left + ', top=' + top + ', toolbar=no, menubar=no, scrollbars=yes, resizable=no, location=no, directories=no, status=no');
}