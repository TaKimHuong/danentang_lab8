export default class CalculatorBrain {
  private height: number; // đơn vị: cm
  private weight: number; // đơn vị: kg
  private _bmi: number = 0;

  constructor(height: number, weight: number) {
    this.height = height;
    this.weight = weight;
  }

  public calculateBMI(): string {
    const heightInMeters = this.height / 100;
    this._bmi = this.weight / (heightInMeters * heightInMeters);
    return this._bmi.toFixed(1);
  }

  public getResult(): string {
    if (this._bmi >= 25) {
      return 'THỪA CÂN';
    } else if (this._bmi > 18.5) {
      return 'BÌNH THƯỜNG';
    } else {
      return 'THIẾU CÂN';
    }
  }

  public getInterpretation(): string {
    if (this._bmi >= 25) {
      return 'Chỉ số khối cơ thể của bạn cao hơn bình thường. Bạn nên tăng cường vận động và tập luyện thể dục.';
    } else if (this._bmi >= 18.5) {
      return 'Chỉ số khối cơ thể của bạn hoàn toàn lý tưởng. Hãy tiếp tục duy trì chế độ dinh dưỡng này!';
    } else {
      return 'Chỉ số khối cơ thể của bạn thấp hơn bình thường. Bạn nên bổ sung dinh dưỡng hợp lý hơn.';
    }
  }
}