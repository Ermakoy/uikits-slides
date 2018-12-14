// font-size: 24px (theme.fontSizes[4])
<Box fontSize={4} />

// margin: 16px (theme.space[3])
<Box m={2} />

// color: #333 (theme.colors.blacks[0])
<Box color="blacks.3" />

// background color (theme.colors['light-red'])
<Box bg="light-red" />

// line-height: 1.5 (theme.lineHeights.copy)
<Box lineHeight="copy" />

// Получается width: 50% т.к. значение не указано в теме
<Box width={1 / 2} />