import {
    AfterContentInit,
    AfterViewInit,
    Component,
    ContentChildren,
    ElementRef,
    EventEmitter,
    Input,
    OnInit,
    Output,
    QueryList,
    ViewEncapsulation
} from '@angular/core';
import {Course} from '../model/course';
import {CourseImageComponent} from '../course-image/course-image.component';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

    @Input()
    course: Course;

    @Input()
    cardIndex: number;

    // tslint:disable-next-line: no-output-rename
    @Output('courseChanged')
    courseEmitter = new EventEmitter<Course>();


    constructor() {

    }

    ngOnInit() {

    }


    onSaveClicked(description: string) {

        this.courseEmitter.emit({...this.course, description});

    }




}
