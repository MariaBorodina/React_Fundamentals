import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { padding } from '@mui/system';

const constants = {
  borderRadius: '0.2em',

}


const theme = createTheme({
    spacing: 4,


    components: {


        // Name of the component
        MuiStack: {
          styleOverrides: {
            // Name of the slot
            root: {
              display: 'flex',

              '&.header': {              
                // Some CSS
                fontSize: '1rem',
                border: '#ff2200 solid 1px',
                borderRadius: `${constants.borderRadius}`,
                margin: '1em',
                width: 'inherit',
                padding: '1em',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '3em'
              },

              '&.right': {
                display: 'flex',
                justifyContent: 'flex-end',
                float: 'right',
                alignItems: 'center',
              },

            },
          },
        },


        // Name of the component
        MuiList: {
          styleOverrides: {
            // Name of the slot
            root: {
              // Some CSS
              fontSize: '1rem',
              border: 'lightblue solid 1px',
              borderRadius: `${constants.borderRadius}`,
              margin: '1em',
              width: 'inherit',
            },
          },
        },

        // Name of the component
        MuiListItem: {
          styleOverrides: {
            // Name of the slot
            root: {
              // Some CSS
              fontSize: '1rem',
              border: '#00aa55 solid 1px',
              borderRadius: `${constants.borderRadius}`,
              margin: '1em',
              width: 'inherit',
            },
          },
        },

        // Name of the component
        MuiButton: {
          styleOverrides: {
            // Name of the slot
            root: {
              // Some CSS
              fontSize: '0.8em',
              textTransform: 'none',
              padding: '0 0.8em',
              margin: '0 0.5em',
              border: '#cc00ee solid 1px',
              color: 'black',
              alignSelf: 'center',
              width: 'fit-content',
            },
          },
        },

        MuiTypography: {
          styleOverrides: {
            root:{
              fontSize: '0.8em',

              '&.fieldName': {
                fontWeight: '600',
                paddingRight: '0.5em',
              },
            },

            h2: {
              fontSize: '1.2em',
              fontWeight: '600',
            },
          }
        },

        MuiInputLabel: {
          styleOverrides: {
            root:{
              textAlign: "left",
            }
          }
        },

        MuiOutlinedInput: {
          styleOverrides: {
            root:{
              "&  fieldset": {
              borderColor: "orange",
              borderRadius: `${constants.borderRadius}`,
            },

              "& input": {
                padding: 5,
              },
            }
          }
        },

        MuiGrid: {
          styleOverrides: {
            container: {
              "&.inputForm": {
                alignItems: "center",
                margin: '2em',
                width: 'unset'
              }
            }
          }
        },


      },
});


export default theme;