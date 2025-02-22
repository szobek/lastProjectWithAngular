import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-webcam',
  templateUrl: './webcam.component.html',
  styleUrls: ['./webcam.component.scss']
})
export class WebcamComponent {
  @ViewChild('video', { static: true }) videoElement!: ElementRef<HTMLVideoElement>;
  @ViewChild('canvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;
  
  capturedImage: string | null = null;

  ngOnInit(): void {
    this.startWebcam();
  }

  startWebcam(): void {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true,audio:true })
        .then(stream => {
          this.videoElement.nativeElement.srcObject = stream;
          this.videoElement.nativeElement.play();
        })
        .catch(err => {
          console.error('Error accessing webcam: ', err);
        });
    } else {
      console.error('getUserMedia not supported on your browser!');
    }
  }

  // Capture an image from the video stream
  capture(): void {
    const canvasEl = this.canvas.nativeElement;
    const videoEl = this.videoElement.nativeElement;
    const context = canvasEl.getContext('2d');
    
    if (context) {
      context.drawImage(videoEl, 0, 0, canvasEl.width, canvasEl.height);
      this.capturedImage = canvasEl.toDataURL('image/png');
    }
  }
}
