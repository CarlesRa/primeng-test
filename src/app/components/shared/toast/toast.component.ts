import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Subject, Subscription } from 'rxjs';
import { IToast } from 'src/app/interfaces/toast.interface';
import { ToastKey } from 'src/app/types/toast.types';

export const showToast$: Subject<IToast> = new Subject();

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  providers: [MessageService]
})
export class ToastComponent implements OnInit, OnDestroy {

  loading = true;
  @Input() position: ToastKey = 'tr';
  subscription!: Subscription;

  constructor(
    private messageService: MessageService,
  ) {
    this.initSubscription();
  }

  ngOnInit(): void {
    this.loading = false;
  }

  ngOnDestroy(): void {
    if (this.subscription) { this.subscription.unsubscribe() }
  }

  initSubscription(): void {
    this.subscription = showToast$.subscribe(value => {
      this.show(value);
    });
  }

  show(iToast: IToast): void {
    this.position = iToast.key ?? 'tr';
    this.messageService.add({
      key: iToast.key ?? 'tr',
      severity: iToast.severity,
      detail: iToast.detail,
    });
  }

}
