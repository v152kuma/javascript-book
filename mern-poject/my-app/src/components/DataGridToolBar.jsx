import React from 'react'
import { GridToolbarExport } from '@mui/x-data-grid'
import { Box } from '@mui/material'

const DataGridToolBar = () => {
  return (
    <div>
        <Box>
           <GridToolbarExport/>
        </Box>
    </div>
  )
}

export default DataGridToolBar