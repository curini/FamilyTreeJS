import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Families } from '../../constants/families';
import { FamiliesService } from '../../services/families.service';

@Component({
  selector: 'app-families',
  templateUrl: './families.component.html',
  styleUrl: './families.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FamiliesComponent implements OnInit {
  listFamilies: Array<any> = Families.filter((f) => !f.isGroup);
  headers: Array<string> = [
    'key',
    'name',
    'gender',
    'spouse',
    'mother',
    'father',
    'birth',
    'death',
    'age',
  ];
  currentPage = 1;
  pageSize = 5;

  constructor(private familiesService: FamiliesService) {}

  ngOnInit(): void {
    this.familiesService.getFamilies().subscribe((data) => {
      this.listFamilies = data.filter((f) => !f.isGroup);
    });
  }

  get paginatedFamilies() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.listFamilies.slice(startIndex, endIndex);
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  get totalPages() {
    return Math.ceil(this.listFamilies.length / this.pageSize);
  }

  get pageNumbers() {
    return Array.from({ length: this.totalPages }, (_, index) => index + 1);
  }
}
