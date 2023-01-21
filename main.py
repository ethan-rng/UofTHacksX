# This is a sample Python script.
from moviepy.audio.io.AudioFileClip import AudioFileClip
import os
# Press ⌃R to execute it or replace it with your code.
# Press Double ⇧ to search everywhere for classes, files, tool windows, actions, and settings.


def print_hi(name):
    # Use a breakpoint in the code line below to debug your script.
    print(f'Hi, {name}')  # Press ⌘F8 to toggle the breakpoint.


def convertToMP3(currFilePath):
    newFilePath = currFilePath[:-4] + ".wav"
    clip = AudioFileClip(currFilePath)
    clip.write_audiofile(newFilePath)
    clip.close()

    os.remove(currFilePath)

# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    file = "adsfadsfads.mp3"
    print(file[-4:])