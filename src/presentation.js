// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Link,
  Fill,
  Fit
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const Sandbox = ({url}) => ( <iframe src={url} style={{width:'100%', height:500, border:0, borderRadius: 4, overflow:'hidden'}} sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin" />);


const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Animation for React
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={2} bold >
            With react-spring
          </Text>
          <Text margin="10px 0 0" textColor="secondary" size={4} >
            - By Nagarajan N
          </Text>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={2}  caps textColor="tertiary">
            About Myself
          </Heading>
          <Text margin="10px 0 0" textColor="secondary" size={3} bold >
            Sr. Software Engineer @snapwiz
          </Text>
          <Text margin="10px 0 0" textColor="tertiary" size={4} >
            @NagarajanFs
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
        <Heading size={6} textColor="secondary" caps>
            animations in general in html
          </Heading>
        <List>
            <ListItem>Very much style dependant (Quirks)</ListItem>
            <ListItem>Can only animate style properties(like width,borderWidth)</ListItem>
            <ListItem>Either layout or composite properties</ListItem>
            <ListItem>End result is assessed based on aesthetic </ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
        <Heading size={6} textColor="secondary" caps>
            Composite vs Layout properties
          </Heading>
        <List>
            <ListItem textSize={35} padding={5}>
              Layout properties are anything that affects the layout(positioning,dimension,etc)</ListItem>
            <ListItem textSize={35}  padding={5}>Composite operations (opacity,transform) doesn't affect the layout</ListItem>
            <ListItem textSize={35}  padding={5}>Animating layout properties would require repaint of the layout of the whole page</ListItem>
            <ListItem textSize={35}  padding={5}>Because of this modern browsers typically animate composite properties through GPU</ListItem>         
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
        <Heading size={6} textColor="secondary" caps>
           Easings
          </Heading>
        <List>
            <ListItem textSize={35} padding={5}>
              Only option in css based animations
            </ListItem>
            <ListItem textSize={35} padding={5}>
              Easings are based on timing and curves <br/>
              <Link href="https://easings.net/" target="_blank"> https://easings.net/</Link>
              </ListItem>
            <ListItem textSize={35}  padding={5}>Doesn't give fluid animation </ListItem>
            <ListItem textSize={35}  padding={5}>Hard to configure custom curve</ListItem>
                
          </List>
        </Slide>
       
        
        <Slide transition={['fade']} bgColor="tertiary">
        <Heading size={6} textColor="secondary" caps>
           Enter Springs
          </Heading>
        <List>
            <ListItem textSize={35} padding={5}>
              Originally emerged in react-motion library
            </ListItem>
            <ListItem textSize={35}  padding={5}>Interruptible (will see in next demo)</ListItem>
            <ListItem textSize={35} padding={5}>
              Primarily physics based and duration parameter is not accepted
              </ListItem>
            <ListItem textSize={35}  padding={5}>
              it may take some getting used to <Link href="http://chenglou.github.io/react-motion/demos/demo5-spring-parameters-chooser/" target="_blank"> configure </Link>
             </ListItem>
            <ListItem textSize={35}  padding={5}>Don't have to imagine a curve to configure</ListItem>
            <ListItem textSize={35}  padding={5}>Let's see some action</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
        <Heading size={6} textColor="secondary" caps>
           Basic Spring
          </Heading>
          <Fill>
            <Sandbox url="https://codesandbox.io/embed/q4xpq8lom9?autoresize=1&view=preview" />
          </Fill>
        </Slide>
        
        <Slide transition={['fade']} bgColor="tertiary">
        <Heading size={6} textColor="secondary" caps>
           React-Spring library
          </Heading>
        <List>
            <ListItem textSize={35} padding={5}>
              Combined features of react-animated & react-motion
            </ListItem>
            <ListItem textSize={35} padding={5}>
              Declarativeness of react-motion and Performance of react-animated
              </ListItem>
            <ListItem textSize={35}  padding={5}>
              Use `native`  spring whenever possible for performance
             </ListItem>
            <ListItem textSize={35}  padding={5}>Native spring doesn't go through react reconciliation process</ListItem>
            <ListItem textSize={35}  padding={5}>Lets see some more common scenario</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
        <Heading size={6} textColor="secondary" caps>
           With interaction
          </Heading>
          <Fill>
            <Sandbox url="https://codesandbox.io/embed/p3yk6wrx0?module=%2Fsrc%2Fmain.js&view=preview" />
          </Fill>
        </Slide>
        
        <Slide transition={['fade']} bgColor="primary">
        <Heading size={6} textColor="secondary" caps>
           Trails/Staggering
          </Heading>
          <Fill>
            <Sandbox url="https://codesandbox.io/embed/xvzw68l1p?module=%2Fsrc%2Fmain.js&view=preview" />
          </Fill>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
        <Heading size={6} textColor="secondary" caps>
           Transition group list
          </Heading>
          <Fill>
            <Sandbox url="https://codesandbox.io/embed/1482zn76mq?autoresize=1&module=%2Fsrc%2Fmain.js&view=preview" />
          </Fill>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
        <Heading size={6} textColor="secondary" caps>
           Multi stage transitions (killer feature)
          </Heading>
          <Fill>
            <Sandbox url="https://codesandbox.io/embed/zl96900q7p?autoresize=1&module=%2Fsrc%2Fmain.js&view=preview" />
          </Fill>
        </Slide>


        <Slide transition={['fade']} bgColor="tertiary">
        <Heading size={6} textColor="secondary" caps>
           imperative scripted
          </Heading>
          <Fill>
            <Sandbox url="https://codesandbox.io/embed/4qxy77o68x?autoresize=1&module=%2Fsrc%2Fmain.js&view=preview" />
          </Fill>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
        <Heading size={6} textColor="secondary" caps>
           Switching elements with animation
          </Heading>
          <Fill>
            <Sandbox url="https://codesandbox.io/embed/13xv480903?autoresize=1&module=%2Fsrc%2Fmain.js&view=preview" />
          </Fill>
        </Slide>


        <Slide transition={['fade']} bgColor="primary">
        <Heading size={6} textColor="secondary" caps>
           With Hooks (⚠️ 😍  )
          </Heading>
          
          <Fill>
            <Sandbox url="https://codesandbox.io/embed/k92ymrxw3?autoresize=1&module=%2Fsrc%2Fmain.js&view=preview" />
          </Fill>
        </Slide>
        
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>An object will remain at rest or in uniform motion in a straight line unless acted upon by an external force</Quote>
            <Cite>Newton</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
