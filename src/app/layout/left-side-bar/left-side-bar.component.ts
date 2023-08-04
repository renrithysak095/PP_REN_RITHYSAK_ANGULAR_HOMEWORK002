import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-left-side-bar',
  templateUrl: './left-side-bar.component.html',
  styleUrls: ['./left-side-bar.component.css'],
})
export class LeftSideBarComponent {
  subject_list: Array<{
    subjectName: string;
    description: string;
    thumbnail: string;
  }> = [
    {
      subjectName: 'Angular',
      description: `Angular is an open framework and
    platform for creating Single Page Applications, written in TypeScript and supported and developed by Google.`,
      thumbnail: '../../../assets/images/angular.png',
    },
    {
      subjectName: 'TypeScript',
      description: `TypeScript is a strongly typed, object oriented, compiled
    language.
    TypeScript is a syntactic superset of JavaScript which adds static typing. It was designed by Anders Hejlsberg (designer of C#) at Microsoft.`,
      thumbnail: '../../../assets/images/typescript.png',
    },
    {
      subjectName: 'Kotlin',
      description: `Kotlin is a modern, trending programming language. Kotlin is easy to learn,
    especially if you already know Java (it is 100% compatible with Java).`,
      thumbnail: '../../../assets/images/kotlin.png',
    },
    {
      subjectName: 'Java',
      description: `Java is a high-level, class-based, object-oriented
    programming language that is designed to
    have as few implementation dependencies as possible.`,
      thumbnail: '../../../assets/images/java.png',
    },
    {
      subjectName: 'JavaScript',
      description: `JavaScript often abbreviated JS, is a programming language
    that is one of the core technologies
    of the World Wide Web, alongside HTML and CSS.`,
      thumbnail: '../../../assets/images/javascript.png',
    },
  ];

  @Output() detailSubject = new EventEmitter<any>();
  sendingObject(subjectName:string):void {
    const sendObject = this.subject_list.filter((res) => res.subjectName === subjectName);
    this.detailSubject.emit(sendObject);
  }

}
