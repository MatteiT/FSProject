// Description: Search bar for albums and artists using the Autocomplete component from Material UI for using in Search.jsx
import React from "react";
import { Box, TextField } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";

const SearchAuto = (albums, {onChange}) => {

    return (
<section className="search">
<Box sx={{ flexGrow: 1 }}>
    <Autocomplete
        id="search_freesolo"
        freeSolo
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        autoHighlight
        options={albums.map((option) => option.title)}
        renderInput={(params) => (
            <TextField
                {...params}
                label="Search input"
                autoFocus={true}
                placeholder="Search for an album or artist here ..."
                variant="outlined"
                onChange={onChange}
            />
        )}
    />
</Box>
    </section>
    );
}

// const url=`https://api.discogs.com/database/search?q=${search}&token=qALItICfHYUDyaIegejpMxJlRDjVmjxBxfkwgbCi&page=${page}`

export default SearchAuto;
