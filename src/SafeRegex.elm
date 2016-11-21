module SafeRegex exposing (..)
{-| A safe alternative to core's Regex

@docs regex
-}


import Regex
import Native.Regex

{-| create a regex in a safe manner -}
regex : String -> Result String Regex.Regex
regex = Native.Regex.regex
