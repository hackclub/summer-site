import { Box, Image } from 'theme-ui'

export default () => (
  <Box as="header" sx={{ bg: '#5bc0de', pt: 5, pb: 3 }}>
    <Image
      alt="Colorful banner with icons representing summer saying Summer of Making"
      src="https://cdn.hackclub.com/019d4414-831a-7adb-a273-242eebe8f0b6/2020-08-31_99x9nb7jy2ujuh4af097wqw5w5dcmt7w%20(1).png"
      sx={{
        objectFit: 'cover',
        minHeight: ['130px', '200px', '200px'],
        maxHeight: '400px',
        pt: 3
      }}
    />
  </Box>
)
