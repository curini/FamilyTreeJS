import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { Node } from '../../interfaces/node';
import { ActivatedRoute } from '@angular/router';
import { FamiliesService } from '../../services/families.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditComponent implements OnInit {
  titre: string = 'Nouveau membre';
  defaultValues: Node[] = [];

  constructor(
    private route: ActivatedRoute,
    private familiesService: FamiliesService,
    private cdRef: ChangeDetectorRef
  ) {}

  public ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const key = parseInt(params.get('id') || '1000000');

      this.familiesService.getFamilies().subscribe((data) => {
        this.defaultValues = data.filter((f) => f.key == key);
        this.cdRef.detectChanges();
      });
    });
  }
}
