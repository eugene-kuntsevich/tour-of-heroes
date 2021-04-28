import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output,} from '@angular/core';

import {MessagesPresenter} from './messages.presenter';

@Component({
    selector: 'app-messages-ui',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [MessagesPresenter],
})
export class MessagesComponent {
    get messages(): string[] {
        return this.presenter.messages;
    }

    @Input() set messages(value: string[]) {
        this.presenter.messages = value;
    }

    @Input() title: string;
    @Output() clear: EventEmitter<void> = new EventEmitter();

    get hasMessages(): boolean {
        return this.presenter.hasMessages;
    }

    constructor(private presenter: MessagesPresenter) {
    }
}
