import { Scroll, Keyframes } from "scrollex";
import { Center, chakra, Img } from "@chakra-ui/react";
import "./styles.css";

const ScrollItem = chakra(Scroll.Item);
const ScrollSection = chakra(Scroll.Section);
const ScrollContainer = chakra(Scroll.Container);

const keyframes: Record<string, Keyframes> = {
  imageContainer: ({ section }) => ({
    [section.topAt("container-bottom")]: {
      translateY: 125,
      translateX: -250,
      opacity: 0,
      rotateX: -25,
      rotateY: -50,
      scale: 0.4
    },
    [section.topAt("container-top")]: {
      translateY: 0,
      translateX: 0,
      opacity: 1,
      rotateX: 0,
      rotateY: 0,
      scale: 1.4
    },
    [section.bottomAt("container-top")]: {
      translateY: -125,
      translateX: 250,
      opacity: 0,
      rotateX: 25,
      rotateY: 50,
      scale: 0.4
    }
  }),
  image: ({ section }) => ({
    [section.topAt("container-bottom")]: {
      translateY: -62.5,
      translateX: 125,
      scale: 1.8
    },
    [section.topAt("container-top")]: {
      translateY: 0,
      translateX: 0,
      scale: 1.5
    },
    [section.bottomAt("container-top")]: {
      translateY: 62.5,
      translateX: -125,
      scale: 2
    }
  })
};

const images = [
  "https://picsum.photos/id/334/400/600",
  "https://picsum.photos/id/239/400/600",
  "https://picsum.photos/id/238/400/600",
  "https://picsum.photos/id/212/400/600",
  "https://picsum.photos/id/213/400/600",
  "https://picsum.photos/id/214/400/600",
  "https://picsum.photos/id/215/400/600",
  "https://picsum.photos/id/116/400/600",
  "https://picsum.photos/id/117/400/600"
];

export default function App() {
  return (
    <ScrollContainer
      scrollAxis="y"
      height="100vh"
      width="100vw"
      scrollSnapType="y mandatory"
    >
      {images.map((image) => {
        return (
          <ScrollSection height="100vh" scrollSnapAlign="start">
            <Center
              pos="fixed"
              inset={0}
              pointerEvents="none"
              style={{ perspective: 600, transformStyle: "preserve-3d" }}
            >
              <ScrollItem
                keyframes={keyframes.imageContainer}
                overflow="hidden"
              >
                <ScrollItem keyframes={keyframes.image}>
                  <Img
                    key={image}
                    src={image}
                    h="300px"
                    w="200px"
                    objectFit="cover"
                  />
                </ScrollItem>
              </ScrollItem>
            </Center>
          </ScrollSection>
        );
      })}
    </ScrollContainer>
  );
}
