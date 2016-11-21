var _eeue56$elm_safe_regex$Native_Regex = function() {

function regex(raw)
{
    try {
        return { 'ctor': 'Ok', _0: new RegExp(raw, 'g') };
    } catch (e){
        return { 'ctor': 'Err', _0:e.message};
    }
}

return {
    regex: regex
};

}();
