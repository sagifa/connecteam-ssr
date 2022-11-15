import React from 'react'


type CostumeButtonProps = {
    links: [    {primary: boolean,
        href: string,
        label: string,
        icon?: string}]

}
const CostumeButton = ({links}:CostumeButtonProps[]) => {
    links[0].primary
  return (
    <Button
    {...PrimaryButtonLinkStyle}
    rightIcon={<ArrowForwardIcon color="white" />}
  >
    <Text {...ButtonContentStyle}>
      {headData.content.hero.links[0].label}
    </Text>
  </Button>





<Button
onMouseEnter={setHoverB.on}
onMouseLeave={setHoverB.off}
leftIcon={
  !isHoverB ? <Icon_1 color="#FF9900" boxSize="3.5" /> : <></>
}
rightIcon={isHoverB ? <ArrowForwardIcon color="FF9900" /> : <></>}
{...SecondaryButtonLinkStyle}
>
{" "}
{headData.content.hero.links[1].label}
</Button>

  )
}

export default CostumeButton



[
    {
    primary: true,
    href: "#",
    label: "Magni ratione"
    },
    {
    primary: false,
    href: "#",
    label: "Modi amet quis",
    icon: "icon-1"
    }
    ]